import {BrowserRouter,Route, Routes as Switch} from 'react-router-dom'
import Home from '../pages/home/home'
import Pagina1 from '../pages/pagina1/paginas'
import Pagina2 from '../pages/pagina2/pagina2'


const Router = () =>{
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' element={<Home/>}/>
                <Route path='/pagina1' element={<Pagina1/>}/>
                <Route path='/pagina2' element={<Pagina2/>}/>
            </Switch>
        
        </BrowserRouter>
    )
}
 
export default Router