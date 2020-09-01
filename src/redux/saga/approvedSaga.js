import { call, put, select, takeLatest } from 'redux-saga/effects';
import * as ApiProvider from "../../utils/APIManager/ApiProvider";
import NavigationServices from '../../utils/NavigationServices';
import StringConstants from '../../utils/StringConstants';
import { MyAlert } from '../../utils/Utility';
import * as Actions from "../actions";
import ActionType from '../actions/actionType';
import { Alert, DeviceEventEmitter } from 'react-native';


const { setLoadingAction, setLoadingMsg, getProfileDetailSagaAction, userDataAction, userTokenAction, isLoginAction, tokenExpiredSaga, } = Actions

function* getData({ type, payload, }) {
  yield put(setLoadingAction(true));
  yield put(setLoadingMsg("GettingData\nPlease wait…"));
  
  try {
    let response = yield call(ApiProvider.getdataApi, );
    yield put(setLoadingAction(false));
    if (response.categories) {
      console.log("GettingData Response:", JSON.stringify(response.categories))

      yield put(userDataAction(response.categories));
      yield put(isLoginAction(true))
      yield put(setLoadingAction(false));
      if (response.message) {
        setTimeout(() => { alert(response.message) }, 200);
      }
    }
    
    else {
      yield put(setLoadingAction(false));
    }
  }

  catch (error) {
    console.log("Catch Error", error);
  }
}


















// Watcher: watch auth request
export default function* watchAuth() {
  // Take Last Action Only
  yield takeLatest(ActionType.DO_LOGIN_SAGA, getData);
 
  // yield takeLatest(ActionType.GET_VEHICLE_LIST_SAGA,getVehicleList );

};