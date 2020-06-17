import { createStore,combineReducers } from 'redux'
import productsReducer from './reducers/productsReducer'
import userReducer from './reducers/userReducer'
//const  initialState = {};
const allReducers = combineReducers({

    products : productsReducer,
    user : userReducer

})
const store = createStore(

  allReducers,
  {
  products: [{ name : 'iPhone'}],
  user: 'Micheal'
  },
  window.devToolsExtension && window.devToolsExtension()

)


export default store;