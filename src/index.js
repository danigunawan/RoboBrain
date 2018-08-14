import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { signinStatus, imageDetection } from 'reducers';
import Project from 'containerProject/containerProject';
import registerServiceWorker from 'registerServiceWorker';

const logger = createLogger();
const rootReducers = combineReducers({signinStatus, imageDetection});
const store = createStore(rootReducers, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(
    <Provider store={store}>
    <Project/>
     </Provider>,document.querySelector("#page-wrapper")
  );
registerServiceWorker();
