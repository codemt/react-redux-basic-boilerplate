import { UPDATE_USER } from '../actions/usersAction'
function userReducer(state='',{type,payload}){
    
    switch(type){
  
        case  UPDATE_USER:
          return payload.user
          default:
          return state;
  
    }
    //return state;
  
}
export default userReducer;

