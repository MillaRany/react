import { useCallback, useEffect, useState } from "react"
import {Link, useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerInitiate } from "../../redux/actions";


const Registrar = () =>{

    const [formState, setFormState] = useState({
        email:"",
        password:""
    });
    const {currentUser} = useSelector((formState)=>formState.user)

    const navegue = useNavigate()
    
    useEffect(()=>{
       if(currentUser){
        navegue.push("/")
       }
    }, [currentUser, navegue])

    const dispatch = useDispatch()

    const{email, password} = formState

    const handleSubmit = (e) =>{
        e.preventDefault()
        dispatch(registerInitiate(email,password))
        setFormState({email:"", password:""}) 
    }
    const handleChange =(e) =>{
        let {name,value} = e.taguet;
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