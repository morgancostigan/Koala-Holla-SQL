import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import * as serviceWorker from './serviceWorker';
import rootReducer from './redux/reducers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from '../node_modules/redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './redux/sagas';
import logger from 'redux-logger';

const sagaMiddleware = createSagaMiddleware();

const store = createStore( 
    rootReducer,
    applyMiddleware(sagaMiddleware, logger ),
);

sagaMiddleware.run(rootSaga);


ReactDOM.render(<Provider store={store} ><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

