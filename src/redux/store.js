import { createStore, combineReducers } from 'redux';
import gui from './reducers/gui';
import initialState from './initialState';

const rootReducer = combineReducers({
  gui,
});

let store = createStore(rootReducer, initialState);

export default store;