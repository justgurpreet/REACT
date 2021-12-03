import './App.css';
// import thunk from 'redux-thunk';
/* saga config */
import createSagaMiddleWare from 'redux-saga';
import rootSaga from './redux/saga'; // index.js

/* end Saga Config */

import {userReducer} from './redux/Reducers';
import {createStore, compose, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import Users from './Users';

// saga
const sagaMiddleWare = createSagaMiddleWare();

// for thunk
// const store = createStore(userReducer, 
//   compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__()));

//saga
const store = createStore(userReducer, 
  compose(applyMiddleware(sagaMiddleWare), window.__REDUX_DEVTOOLS_EXTENSION__()));

sagaMiddleWare.run(rootSaga);

function App() {
  return (
    <Provider store={store}>
      <Users />
    </Provider>
  );
}

export default App;
