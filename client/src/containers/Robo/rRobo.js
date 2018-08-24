import {CHANGE_SEARCH_FIELD, REQUEST_ROBOTS_SUCCESS, REQUEST_ROBOTS_FAIL, REQUEST_ROBOTS_PENDING } from 'constans'
    

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