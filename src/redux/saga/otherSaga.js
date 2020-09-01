import { call, put, select, takeLatest } from 'redux-saga/effects';
import * as ApiProvider from "../../utils/APIManager/ApiProvider";
import NavigationServices from '../../utils/NavigationServices';
import StringConstants from '../../utils/StringConstants';
import { MyAlert } from '../../utils/Utility';
import * as Actions from "../actions";
import ActionType from '../actions/actionType';
import { DeviceEventEmitter } from 'react-native';

const { setLoadingAction, setLoadingMsg, userDataAction, userTokenAction, isLoginAction } = Actions

function* getCountryList({ type, payload, }) {
  yield put(setLoadingAction(true));
  yield put(setLoadingMsg("Please wait…"));

  try {
    let response = yield call(ApiProvider.getCountryListApi, payload);
    console.log("Countries Response:", JSON.stringify(response))
    yield put(setLoadingAction(false));
    if (response && response.success && response.data) {
      yield put(setLoadingAction(false));
      DeviceEventEmitter.emit(StringConstants.GET_COUNTRIES_LIST_EVENT, response.data)
    }
    else if (response && response.error) {
      setTimeout(() => { MyAlert("Error", response.error) }, 200);
      yield put(setLoadingAction(false));
      DeviceEventEmitter.emit(StringConstants.GET_COUNTRIES_LIST_EVENT, null)
    }
    else {
      yield put(setLoadingAction(false));
      DeviceEventEmitter.emit(StringConstants.GET_COUNTRIES_LIST_EVENT, null)

    }
  }
  catch (error) {
    console.log("Catch Error", error);
    DeviceEventEmitter.emit(StringConstants.GET_COUNTRIES_LIST_EVENT, null)

  }
}

function* getStateList({ type, payload, }) {
  yield put(setLoadingAction(true));
  yield put(setLoadingMsg("Please wait…"));

  try {
    let response = yield call(ApiProvider.getStateListApi, payload);
    console.log("STATE Response:", JSON.stringify(response))
    if (response && response.success && response.data) {
      yield put(setLoadingAction(false));
      DeviceEventEmitter.emit(StringConstants.GET_COUNTRIES_LIST_EVENT, response.data)
    }
    else if (response && response.error) {
      setTimeout(() => { MyAlert("Error", response.error) }, 200);
      yield put(setLoadingAction(false));
      DeviceEventEmitter.emit(StringConstants.GET_COUNTRIES_LIST_EVENT, null)
    }
    else {
      yield put(setLoadingAction(false));
      DeviceEventEmitter.emit(StringConstants.GET_COUNTRIES_LIST_EVENT, null)

    }
  }
  catch (error) {
    console.log("Catch Error", error);
    DeviceEventEmitter.emit(StringConstants.GET_COUNTRIES_LIST_EVENT, null)

  }
}

function* getCityList({ type, payload, }) {
  yield put(setLoadingAction(true));
  yield put(setLoadingMsg("Please wait…"));

  try {
    let response = yield call(ApiProvider.getCityListApi, payload);
    console.log("City Response:", JSON.stringify(response))
    if (response && response.success && response.data) {
      DeviceEventEmitter.emit(StringConstants.GET_COUNTRIES_LIST_EVENT, response.data)
      yield put(setLoadingAction(false));

    }
    else if (response && response.error) {
      setTimeout(() => { MyAlert("Error", response.error) }, 200);
      yield put(setLoadingAction(false));
      DeviceEventEmitter.emit(StringConstants.GET_COUNTRIES_LIST_EVENT, null)
    }
    else {
      yield put(setLoadingAction(false));
      DeviceEventEmitter.emit(StringConstants.GET_COUNTRIES_LIST_EVENT, null)
    }
  }
  catch (error) {
    console.log("Catch Error", error);
    DeviceEventEmitter.emit(StringConstants.GET_COUNTRIES_LIST_EVENT, null)

  }
}

function* getMakeList({ type, payload, }) {
  yield put(setLoadingAction(true));
  yield put(setLoadingMsg("Please wait…"));

  try {
    let response = yield call(ApiProvider.getMakeListApi, payload);
    console.log("getMakeListApi Response:", JSON.stringify(response))
    if (response && response.success && response.data) {
      DeviceEventEmitter.emit(StringConstants.GET_COUNTRIES_LIST_EVENT, response.data)
      yield put(setLoadingAction(false));

    }
    else if (response && response.error) {
      setTimeout(() => { MyAlert("Error", response.error) }, 200);
      yield put(setLoadingAction(false));
      DeviceEventEmitter.emit(StringConstants.GET_COUNTRIES_LIST_EVENT, null)
    }
    else {
      yield put(setLoadingAction(false));
      DeviceEventEmitter.emit(StringConstants.GET_COUNTRIES_LIST_EVENT, null)
    }
  }
  catch (error) {
    console.log("Catch Error", error);
    DeviceEventEmitter.emit(StringConstants.GET_COUNTRIES_LIST_EVENT, null)

  }
}

function* getCompanyVehicleList({ type, payload, }) {
  yield put(setLoadingAction(true));
  yield put(setLoadingMsg("Please wait…"));

  try {
    let response = yield call(ApiProvider.getCompanyVehicleListApi, payload);
    console.log("getCompanyVehicleListApi Response:", JSON.stringify(response))
    if (response && response.success && response.data) {
      DeviceEventEmitter.emit(StringConstants.GET_COUNTRIES_LIST_EVENT, response.data)
      yield put(setLoadingAction(false));

    }
    else if (response && response.error) {
      setTimeout(() => { MyAlert("Error", response.error) }, 200);
      yield put(setLoadingAction(false));
      DeviceEventEmitter.emit(StringConstants.GET_COUNTRIES_LIST_EVENT, null)
    }
    else {
      yield put(setLoadingAction(false));
      DeviceEventEmitter.emit(StringConstants.GET_COUNTRIES_LIST_EVENT, null)
    }
  }
  catch (error) {
    console.log("Catch Error", error);
    DeviceEventEmitter.emit(StringConstants.GET_COUNTRIES_LIST_EVENT, null)

  }
}

function* getModelVehicleList({ type, payload, }) {
  yield put(setLoadingAction(true));
  yield put(setLoadingMsg("Please wait…"));

  try {
    let response = yield call(ApiProvider.getModelVehicleListApi, payload);
    console.log("getModelVehicleListApi Response:", JSON.stringify(response))
    if (response && response.success && response.data) {
      DeviceEventEmitter.emit(StringConstants.GET_COUNTRIES_LIST_EVENT, response.data)
      yield put(setLoadingAction(false));

    }
    else if (response && response.error) {
      setTimeout(() => { MyAlert("Error", response.error) }, 200);
      yield put(setLoadingAction(false));
      DeviceEventEmitter.emit(StringConstants.GET_COUNTRIES_LIST_EVENT, null)
    }
    else {
      yield put(setLoadingAction(false));
      DeviceEventEmitter.emit(StringConstants.GET_COUNTRIES_LIST_EVENT, null)
    }
  }
  catch (error) {
    console.log("Catch Error", error);
    DeviceEventEmitter.emit(StringConstants.GET_COUNTRIES_LIST_EVENT, null)

  }
}




// Watcher: watch auth request
export default function* watchOther() {
  // Take Last Action Only
  yield takeLatest(ActionType.GET_COUNTRY_LIST_SAGA, getCountryList);
  yield takeLatest(ActionType.GET_STATE_LIST_SAGA, getStateList);
  yield takeLatest(ActionType.GET_CITY_LIST_SAGA, getCityList);
  yield takeLatest(ActionType.GET_MAKE_LIST, getMakeList);
  
  // yield takeLatest(ActionType.GET_VEHICLE_LIST_SAGA,getVehicleList );
  yield takeLatest(ActionType.GET_COMPANY_VEHICLE_LIST_SAGA,getCompanyVehicleList );
  yield takeLatest(ActionType.GET_MODEL_VEHICLE_LIST_SAGA,getModelVehicleList );

};