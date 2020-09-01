import { store } from '../store';
import ActionType from './actionType';

export const setLoadingAction = item => {
  if (item == false) {
    store.dispatch(setLoadingMsg("Loading . . ."))
  }
  return {
    type: ActionType.IS_LOADING,
    payload: item
  }
}

export const setLoadingMsg = item => {
  return {
    type: ActionType.LOADING_MSG,
    payload: item
  }
}

export const internetConnected = () => {
  console.log('ACTION_CONNECTED')
  return {
    type: ActionType.INTERNET_CONNECTED
  };
}

export const internetDisconnected = () => {
  console.log('ACTION_DISCONNECTED')
  return {
    type: ActionType.INTERNET_DISCONNECTED
  };
}

export const getCountryListSaga = item => {
  return {
    type: ActionType.GET_COUNTRY_LIST_SAGA,
    payload: item
  }
}

export const getStateListSaga = item => {
  return {
    type: ActionType.GET_STATE_LIST_SAGA,
    payload: item
  }
}



