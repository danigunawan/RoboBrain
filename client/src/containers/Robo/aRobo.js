import {CHANGE_SEARCH_FIELD,REQUEST_ROBOTS_SUCCESS,REQUEST_ROBOTS_FAIL} from 'constans';


    export const setSearchField = (text) => {
        return {
            type: CHANGE_SEARCH_FIELD,
            payload: text
        }
    }
    
    export const requestRobots=()=>(dispatch)=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=> response.json())
            .then(users=> {
                dispatch({type: REQUEST_ROBOTS_SUCCESS, payload:  users})
            })
            .catch(error => dispatch({ type: REQUEST_ROBOTS_FAIL, payload: error }))
    }