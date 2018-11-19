// import * as reducers from './rRobo';
// import {CHANGE_SEARCH_FIELD, REQUEST_ROBOTS_SUCCESS, REQUEST_ROBOTS_FAIL } from 'constans'

// describe('searchRobots',()=>{
//     const initialStateSearch = {
//         searchField: ''
//     }
//     it('return initial state',()=>{
//         expect(reducers.searchRobots(undefined,{})).toEqual({searchField:''})
//     })
//     it('handle CHANGE_SEARCH_FIELD state',()=>{
//         expect(reducers.searchRobots(initialStateSearch,{type: CHANGE_SEARCH_FIELD, payload: 'abc'})).toEqual({searchField:'abc'})
//     })
// })

// describe('requestRobots',()=>{
//     const initialStateRobots = {
//         isPending: false,
//         robots: []
//     }
//     it('return initial state',()=>{
//         expect(reducers.requestRobots(undefined,{})).toEqual({isPending: false, robots: []})
//     })
//     it('handle REQUEST_ROBOTS_SUCCESS state',()=>{
//         expect(reducers.requestRobots(initialStateRobots,{type: REQUEST_ROBOTS_SUCCESS, payload: ['robot']})).toEqual({isPending: false, robots: ['robot']})
//     })
//     it('handle REQUEST_ROBOTS_FAIL state',()=>{
//         expect(reducers.requestRobots(initialStateRobots,{type: REQUEST_ROBOTS_SUCCESS, payload: []})).toEqual({isPending: false, robots: []})
//     })
// })

