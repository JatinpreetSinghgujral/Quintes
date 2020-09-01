import ActionType from './actionType';

export const doLoginAction = () => {
  // console.log("setting user token" + JSON.stringify(token));
  return {
    type: ActionType.DO_LOGIN_SAGA,
    
  };
}






export const userDataAction = (userData) => {
  return {
    type: ActionType.USER_DATA,
    payload: userData
  };
}








