import ActionTypes from '../actions/actionType'

export const internetReducer = (state = false, action) => {
    switch (action.type) {
        case ActionTypes.INTERNET_CONNECTED:
            console.log('INTERNET:CONNECT')
            return state = true
        case ActionTypes.INTERNET_DISCONNECTED:
            console.log('INTERNET:DISCONNECT')
            return state = false
        default:
            console.log('INTERNET:DEFAULT')
            return state
    }
}

export const isLoadingReducer = (state = false, action) => {
    switch (action.type) {
        case ActionTypes.IS_LOADING:
            // console.log("LOADING_ACTION:" + action.payload)
            return action.payload
        default:
            // console.log("LOADING_ACTION_DEFAULT:" + state)
            return state
    }
}


export const loadingMsgReducer = (state = "Loading . . .", action) => {

    switch (action.type) {
        case ActionTypes.LOADING_MSG:
            console.log("LOADING_MSG:" + action.payload)
            return action.payload
        default:
            console.log("LOADING_MSG_DEFAULT:" + state)
            return state
    }
}