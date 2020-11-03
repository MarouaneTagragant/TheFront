
const initialState = {
    users: [],
    user : {}
}

export default function(state = initialState,action){
        switch(action.type){
            case 'GET_USERS' : 
                return {
                    ...state,
                    users : action.payload
                };
            case 'GET_USER' : 
                return {

                };
            case 'DELETE_USER' : 
                return {

                };
            case 'ADD_USER' : 
                return {

                };
            case 'UPDATE_USER':
                return{
                    
                };
            default : {
                return state
            }
        }

}