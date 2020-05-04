import { configureStore, combineReducers } from '@reduxjs/toolkit'

import rootReducer from './reducers'

const store = configureStore({ 
  reducer: combineReducers({
    rootReducer,
  }),
});

export default store;