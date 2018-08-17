import {ON_ROUTE_CHANGE, USER_SIGNIN,SET_REGISTER_PARAM, SET_IMAGE_URL, SET_RECOG_BOX
,  CHANGE_SEARCH_FIELD,
REQUEST_ROBOTS_SUCCESS,
REQUEST_ROBOTS_FAIL,
REQUEST_ROBOTS_PENDING} from 'constans';

// SmartBrain 
export const setRoute=(route)=>{
    return{
        type: ON_ROUTE_CHANGE,
        payload: route
    }
}

export const onSignIn=(boolean, user)=>{
    return{
        type: USER_SIGNIN,
        payload: {
            boolean: boolean,
            user: user
        }
    }
}

export const setRegisterParam=(paramName, paramValue)=>{
    return{
        type: SET_REGISTER_PARAM,
        payload: {
            name:paramName,
            value: paramValue
        }
    }
}

export const setImageURL=(value)=>{
    return{
        type: SET_IMAGE_URL,
        payload: value
    }
}

export const setRecogBox=(box)=>{
    return{
        type: SET_RECOG_BOX,
        payload: box
    }
}

// RoboFriend

export const setSearchField = (text) => {
    return {
        type: CHANGE_SEARCH_FIELD,
        payload: text
    }
}

export const requestRobots=()=>(dispatch)=>{
    dispatch({ type: REQUEST_ROBOTS_PENDING });

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users=> {
            dispatch({type: REQUEST_ROBOTS_SUCCESS, payload:  users})
        })
        .catch(error => dispatch({ type: REQUEST_ROBOTS_FAIL, payload: error }))
}