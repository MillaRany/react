import React from 'react'
import { createStore } from 'redux'
import { action } from 'typesafe-actions'

const inicialState={
    users:[],
    logado: null,
    usuario:[{
        id: 1,
        name: 'milla',
    },
    {
        id: 2,
        name: 'paula',
    },{
        id: 3,
        name: 'bruna',
    }],
    usuarios:[]
}
const reducer = (state:any = inicialState, action:any) =>{
    switch(action.type){
        case "registro":
            return{
                ...state,
                users: [...state.users, action.payload]
            }
            default: 
            return state;
    }
}
export default createStore(reducer)