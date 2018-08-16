import {USER_SIGNIN, USER_SIGNIN_FAIL, IMAGE_URL_CHANGE, ON_ROUTE_CHANGE
,SET_REGISTER_PARAM, SET_IMAGE_URL,SET_RECOG_BOX } from 'constans'

const initialSigninStatus={
    isSignedIn: true,
    signedInUser: {},
    signinEmail: '',
    signinPassword: '',
    signinRememberMe: '',
    route: ''
}

export const signinStatus = (state=(initialSigninStatus), action={})=>{
    switch(action.type){
        case ON_ROUTE_CHANGE:
            return Object.assign({}, state, {route: action.payload});
        case USER_SIGNIN:
            return Object.assign({}, state, {isSignedIn: action.payload.boolean, signinUser: action.payload.user});
        // case USER_SIGNIN_FAIL:
        //     return Object.assign({}, state, {isSignedIn:false});
        default:
            return state;
    }
}

const initialRegisterUser ={
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    isRegistered: false
}

export const RegisterUser=(state=(initialRegisterUser), action={})=>{
    switch(action.type){
        case SET_REGISTER_PARAM:
            for(let key of Object.keys(state)){
                if(key===action.payload.name){
                    state[key]=action.payload.value;
                }
                return state;
            }
        default:
            return state;
    }
}

const initialImageDetection={
    inputURL: '',
    box: []
}

export const imageDetection=(state=(initialImageDetection), action={})=>{
    switch(action.type){
        case SET_IMAGE_URL:
            return Object.assign({}, state, { inputURL:action.payload});
        case SET_RECOG_BOX:
        return Object.assign({}, state, { box:action.payload});
        default:
            return state;
    }
}