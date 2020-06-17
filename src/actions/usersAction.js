// declare action type.
export const UPDATE_USER =  'updateUser'
// action method
export default function updateUser(newUser){

    return{

        type:UPDATE_USER,
        payload:{
            user : newUser
        }
    }


}
