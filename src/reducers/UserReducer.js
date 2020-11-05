
const initialState = {
    users: [],
    classes : [],
    user : {
        classe : {}
    }
}

export default function(state = initialState,action){
        switch(action.type){
            case 'GET_USERS' : 
                return {
                    ...state,
                    users : action.payload
                };
            case 'GET_CLASSES' : 
                return {
                    ...state,
                    classes : action.payload
                };
            case 'GET_USER' : 
                return {
                    ...state,
                    user : action.payload
                };
            case 'DELETE_USER' : 
                return {

                };
            case 'ADD_USER' : 
                return {
                    users : [...state.users,action.payload]
                };
            case 'UPDATE_USER':
                return{
                    
                };
            default : {
                return state
            }
        }

}