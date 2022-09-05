import {BrowserRouter,Route, Routes as Switch} from 'react-router-dom'
import Home from '../pages/home/home'
import Pagina1 from '../pages/pagina1/paginas'
import Pagina2 from '../pages/pagina2/pagina2'
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
                <Route path='/' element={<Home/>}/>

                <Route path='/pagina1'
                 element={
                    <PrivateRoute redirectTo='/'>
                    <Pagina1/>
                    </PrivateRoute>}
                    />

                <Route path='/pagina2'
                 element={
                    <PrivateRoute redirectTo='/'>
                    <Pagina2/>
                    </PrivateRoute>}
                    />
                
                <Route path='*' element={<NaoEncontrada/>}/>
            </Switch>
        
        </BrowserRouter>
    )
}
 
export default Router