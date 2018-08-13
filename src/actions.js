import {ON_ROUTE_CHANGE} from 'constans';

export const setRoute=(route)=>{
    return{
        type: ON_ROUTE_CHANGE,
        payload: route
    }
}