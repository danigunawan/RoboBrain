import {USER_SIGNIN_SUCCESS, USER_SIGNIN_FAIL, IMAGE_URL_CHANGE, ON_ROUTE_CHANGE} from 'constans';


const initialSigninStatus={
    isSignedIn: false,
    signinUser: {},
    route: ''
}

export const signinStatus = (state=(initialSigninStatus), action={})=>{
    switch(action.type){
        case ON_ROUTE_CHANGE:
            return Object.assign({}, state, {route: action.payload});
        case USER_SIGNIN_SUCCESS:
            return Object.assign({}, state, {isSignedIn: true, signinUser: action.payload});
        case USER_SIGNIN_FAIL:
            return Object.assign({}, state, {isSignedIn:false});
        default:
            return state;
    }
}

const initialImageDetection={
    inputURL: '',
    box: {}
}

export const imageDetection=(state=(initialImageDetection), action={})=>{
    switch(action.type){
        case IMAGE_URL_CHANGE:
            return Object.assign({}, state, {inputURL: action.payload});
        default:
            return state;
    }
}