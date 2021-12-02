import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, compose} from 'redux';
import rootReducer  from './redux/reducers';

import './index.css';
import App from './App';
 
const store = createStore(rootReducer, compose(window.__REDUX_DEVTOOLS_EXTENSION__()));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

 