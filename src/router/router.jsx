
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../component/login';
import Register from '../component/register';
import Forget from '../component/forget'
function Routers() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login/>} />
            <Route path='/register' element={<Register/>}/>
            <Route path='/forgetPassword' element={<Forget/>}/>
        </Routes>
        </BrowserRouter>
    )
}
export default Routers;