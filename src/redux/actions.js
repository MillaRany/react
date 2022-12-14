import *  as types from './actionsType'

const registerStart = () =>({
type: types.REGISTER_START,
})

const registerSucess = (user) =>({
    type: types.REGISTER_SUCESS,
    payload:user,
    })
const registerFail = (error) =>({
    type: types.REGISTER_FAIL,
    payload:error,
    })


export const registerInitiate =(email, password, displayName) =>{
    return function(dispatch){
        dispatch(registerStart())
        auth
        .createUserWithEmailAndPassword(email,password)
        .then(({user})=>{
            user.updateProfile({
                displayName,
            })
            dispatch(registerSucess(user))
        })
        .catch((error)=>dispatch(registerFail(error.mensage)))
        }
}