import './App.css';
import thunk from 'redux-thunk';
import {userReducer} from './redux/Reducers';
import {createStore, compose, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import Users from './Users';

const store = createStore(userReducer, 
  compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__()));


function App() {
  return (
    <Provider store={store}>
      <Users />
    </Provider>
  );
}

export default App;
