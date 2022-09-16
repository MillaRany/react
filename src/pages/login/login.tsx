import { useCallback, useState } from "react"
import React from "react"
import { Link } from "react-router-dom";

interface IFormState{
    email:string;
    password:string;
}

const Login = () =>{

    const [formState, setFormState] = useState<IFormState>({
        email:"",
        password:""
    });
    console.log({formState})

    const handleSubmit = useCallback(
        (event: React.FormEvent<HTMLFormElement>)=>{
            event.preventDefault()

        const{email, password} = formState;

        if (!email || !password){
            window.alert("preencha todos os campos")
            
            return
        }
        window.alert("sucesso")
    },[formState])
    {

    const handleChangeInput = useCallback((event: React.FormEvent<HTMLInputElement>)=>{

        const targetInput = event.currentTarget;
        const {value, name} = targetInput;

        setFormState({
            ...formState,
            [name]:event.currentTarget?.value || "",
    
    });
},
[formState])
        return(
            <form onSubmit={handleSubmit}>
                <input 
                type='email'
                placeholder="email"
                name="email"
                required
                value={formState.email}
                onChange={handleChangeInput}/>
                
                <input type='password'
                placeholder="senha"
                name="password"
                required
                value={formState.password}
                onChange={handleChangeInput}/>
                <button type="submit"> enviar </button>
                <Link to="/registrar">
                <button>
                registrar
                </button>
                </Link>
            </form>
        )
    }

    }

    export default Login