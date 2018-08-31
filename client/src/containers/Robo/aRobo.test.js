import { mockStore } from 'setupTests';
import {CHANGE_SEARCH_FIELD,REQUEST_ROBOTS_SUCCESS,REQUEST_ROBOTS_FAIL} from 'constans';
import * as actions from './aRobo';

describe('setSearchField',()=>{
    it('handle CHANGE_SEARCH_FIELD with text',()=>{
        expect(actions.setSearchField('abc')).toEqual({ type: CHANGE_SEARCH_FIELD,payload: 'abc'})
    })
    it('handle CHANGE_SEARCH_FIELD with undefined',()=>{
        expect(actions.setSearchField(undefined)).toEqual({ type: CHANGE_SEARCH_FIELD,payload: undefined})
    })
    it('handle CHANGE_SEARCH_FIELD with null',()=>{
        const expectedAction={ type: CHANGE_SEARCH_FIELD,payload: null}
        expect(actions.setSearchField(null)).toEqual(expectedAction)
    })
})

describe('requestRobots',()=>{
    it('fetch list of user',()=>{
        const store = mockStore();
        store.dispatch(actions.requestRobots());
        const action=store.getActions();
        console.log(action);
        const mockUser={
            "id": 1,
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz",
            "address": {
              "street": "Kulas Light",
              "suite": "Apt. 556",
              "city": "Gwenborough",
              "zipcode": "92998-3874",
              "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
              }
            }};
        const expectedAction={
            type: REQUEST_ROBOTS_SUCCESS,
            payload: mockUser
        }
        expect(action[0]).toEqual(expectedAction);
    })
  
})