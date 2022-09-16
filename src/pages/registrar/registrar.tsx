import { useCallback, useState } from "react"
import React from "react"
import {Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

interface IFormState{
    email:string;
    password:string;
}

const Registrar = () =>{

    const [formState, setFormState] = useState<IFormState>({
        email:"",
        password:""
    });
    const {currentUser} = useSelector((formState)=>formState.user)

    const dispatch = useDispatch()

    const{email, password} = formState

    const handleSubmit = (e:any) =>{
        e.preventDefault()
    }
    const handleChange =(e:any) =>{
        var {name,value} = e.taguet;
        setFormState({...formState,[name]:value})
    }
        return(
            <form onSubmit={handleSubmit}>
                <input 
                type='email'
                placeholder="email"
                name="email"
                required
                value={formState.email}
                onChange={handleChange}/>
                
                <input type='password'
                placeholder="senha"
                name="password"
                required
                value={formState.password}
                onChange={handleChange}/>
                <button type="submit"> enviar </button>
                <Link to="/">
                <button>
                logar
                </button>
                </Link>
            </form>
        )
    }

    

    export default Registrar