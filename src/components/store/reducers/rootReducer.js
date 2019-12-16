import authReducer from './authReducer';
import routeReducer from './routeReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  auth: authReducer,
  route: routeReducer,
  firestore: firestoreReducer
});

export default rootReducer;

// the key name will be the data property on the state object