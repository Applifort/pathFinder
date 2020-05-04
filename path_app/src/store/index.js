import { configureStore, combineReducers } from '@reduxjs/toolkit'

import pathReducer from './pathReducer'

const store = configureStore({ 
  reducer: combineReducers({
    path: pathReducer,
  }),
});

export default store;