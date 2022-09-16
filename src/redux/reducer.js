import *  as types from './actionsType'

const initialState={
    loading:false,
    currentUser:null,
    error:null,
}
const userReducer =(state = initialState, action)=>{
    switch(action.type){
        case types.REGISTER_START:
            return{
                ...state,
                loading:true
        }
        case types.REGISTER_SUCESS:
            return{
                ...state,
                loading:false,
                currentUser:action.payload,
            
        }
        case types.REGISTER_FAIL:
            return{
                ...state,
                loading:false,
                currentUser:action.payload,
 
            }
        
        default:return state
    }
}
export default userReducer