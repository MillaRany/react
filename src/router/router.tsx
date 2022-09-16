import {BrowserRouter,Route, Routes as Switch} from 'react-router-dom'
import Login from '../pages/login/login'
import Registrar from '../pages/registrar/registrar'
import Home from '../pages/home/home'
import { Navigate } from 'react-router'
import { isAuthenticated } from '../pages/autenticacao/auntentica'
import NaoEncontrada from '../pages/naoEncontrada/naoEncontrada'


const PrivateRoute = ({ children , redirectTo}: any) => {
console.log("autenticado", isAuthenticated)
return isAuthenticated () ? children : <Navigate to={redirectTo}/>
};

const Router = () =>{
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' element={<Login/>}/>

                <Route path='/registrar'
                 element={<Registrar/>}
                    />

                <Route path='/home'
                 element={
                    <PrivateRoute redirectTo='/'>
                    <Home/>
                    </PrivateRoute>}
                    />
                
                <Route path='*' element={<NaoEncontrada/>}/>
            </Switch>
        
        </BrowserRouter>
    )
}
 
export default Router