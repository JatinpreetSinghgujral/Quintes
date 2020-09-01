import axios from 'axios';
import { DeviceEventEmitter } from 'react-native';
import * as Actions from '../../redux/actions';
// import { RNS3 } from 'react-native-aws3';
import NavigationServices from '../../utils/NavigationServices';
import StringConstants from '../StringConstants';
import { MyAlert } from '../Utility';
import { store } from './../../redux/store';

const { setLoadingAction, userDataAction, userTokenAction, isLoginAction } = Actions


async function callApi(urlString, header, body, methodType, isMultipart) {
  console.log("-----------AXIOS  Api request is----------- ");
  console.log("url string " + urlString);
  console.log("header " + JSON.stringify(header));
  console.log("body " + JSON.stringify(body));
  console.log("methodType " + methodType)

  return axios({
    method: methodType, //you can set what request you want to be
    url: urlString,
    data: isMultipart ? body : methodType != "GET" ? JSON.stringify(body) : null,
    headers: header
  }).then(res => {
    console.log("-----------AXIOS  Api Response is----------- ");
    console.log("url string " + urlString);
    console.log("header " + JSON.stringify(header));
    console.log("body " + JSON.stringify(body));
    console.log("methodType " + methodType)
    console.log(JSON.stringify("res.data", res.data));
    if (JSON.stringify(res.data).startsWith("<") || JSON.stringify(res.data).startsWith("\"<")) {
      DeviceEventEmitter.emit(StringConstants.STOP_LOADER_EVENT);
      setTimeout(() => {
        MyAlert("Error", "A webpage is returned instead of a response")
      }, 500);

    }
    if (res.data.Data) {
      console.log("DATA_FOUND")
      let r = Object.assign(res.data, { ['data']: res.data['Data'] });
      delete r['Data']
      return r
    }
    else
      return res.data
  }
  )
    .catch(e => {
      console.log("-----------AXIOS  Api catch is-----------")
      console.log(e)
      console.log("catch Error" + JSON.stringify(e))
      if (e.response && e.response.data) {
        console.log("catch response", JSON.stringify(e.response.data))
        if (JSON.stringify(e.response.data).startsWith("<") || JSON.stringify(e.response.data).startsWith("\"<")) {
          DeviceEventEmitter.emit(StringConstants.STOP_LOADER_EVENT);
          setTimeout(() => {
            MyAlert("Error", "A webpage is returned instead of a response")
          }, 500);
        }
        if (e.response.data.Data) {
          console.log("DATA_FOUND")
          let r = Object.assign(e.response.data, { ['data']: e.response.data['Data'] });
          delete r['Data']
          return r
        }
        else {
          if (e.response.data.error == 440) {
            store.put(isLoginAction(false));
            store.put(userDataAction(null));
            store.put(userTokenAction(null));
            // DeviceEventEmitter.addListener(StringConstants.IS_LOGOUT_EVENT, response.success)
            store.put(setLoadingAction(false));
            NavigationServices.logout()
          }
          return e.response.data
        }
      }
      else { store.put(setLoadingAction(false)); throw new Error("Request Failed"); }
    })
}

async function fetchApiData(urlString, body, methodType, isMultipart) {

  // let userToken = store.getState().userTokenReducer;
  let userToken
  const unsubscribe = await store.subscribe(async () => {
    console.log("GET STORE", await store.getState())
  }
  )
  userToken = await store.getState().userTokenReducer;

  if (userToken) {
    console.log("userTokenValue" + JSON.stringify(userToken))
  }
  unsubscribe()


  try {
    // saveToken(token)
    let header = {
      "Accept": "application/json",
      "Content-Type": "application/json",
    }
    if (isMultipart) {
      header['Content-Type'] = "multipart/form-data";
    }
    else {
    }

    if (userToken) {
      header['Authorization'] = userToken
    }
    if (body&& !isMultipart) body['role'] = 'Driver'
    return callApi(urlString, header, body, methodType, isMultipart)
  } catch (error) {
    throw new Error(error)
  }
}

// async function callUploadFileAWS(body) {
//   console.log("bodyvalueS3" + JSON.stringify(body))
//   const file = {
//     uri: body.uri,
//     name: body.name,
//     type: body.type
//   }

//   const options = {
//     keyPrefix: "uploads/",
//     bucket: "eschooltestbucket",
//     region: "ap-south-1",
//     accessKey: "AKIA3WQFGISRPERFRX5X",
//     secretKey: "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",
//     successActionStatus: 201
//   }
//   console.log("filevalue" + JSON.stringify(file))
//   return RNS3.put(file, options).then(response => {
//     // console.log("resbody" + JSON.stringify(response));
//     // console.log("resbody" + JSON.stringify(response.body));
//     if (response.status !== 201)
//       throw new Error("Failed to upload image to S3");
//     // console.log("res" + response.body);
//     return response

//   }).catch(function (error) {
//     console.log("errorRns3" + JSON.stringify(error));
//   });
// }



// export async function uploadFileAWS(body) {
//   return callUploadFileAWS(body)
// }


export async function getdataApi() {
  console.log("----------Logout Api Call ------------------")
  return fetchApiData("https://api.jsonbin.io/b/5f2c36626f8e4e3faf2cb42e", null, "GET")
}


