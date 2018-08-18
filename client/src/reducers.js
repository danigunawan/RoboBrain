import {USER_SIGNIN, ON_ROUTE_CHANGE,SET_REGISTER_PARAM, SET_IMAGE_URL,SET_RECOG_BOX
,  CHANGE_SEARCH_FIELD, REQUEST_ROBOTS_SUCCESS, REQUEST_ROBOTS_FAIL, REQUEST_ROBOTS_PENDING } from 'constans'


// SmartBrain
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

// RoboFriend
const initialStateSearch = {
    searchField: ''
}

export const searchRobots = (state = initialStateSearch, action = {}) => {
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, { searchField: action.payload });
        default:
            return state;
    }
}

export const initialStateRobots = {
    isPending: false,
    robots: []
}

export const requestRobots = (state = initialStateRobots, action = {}) => {
    switch (action.type) {
        case REQUEST_ROBOTS_SUCCESS:
            return Object.assign({}, state, { robots: action.payload, isPending: false });
        case REQUEST_ROBOTS_FAIL:
            return Object.assign({}, state, { error: action.payload, isPending: false });
        case REQUEST_ROBOTS_PENDING:
            return Object.assign({}, state, { isPending: true });
        default:
            return state;
    }
}