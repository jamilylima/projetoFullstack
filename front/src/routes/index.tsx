import { Route, Routes } from 'react-router-dom';
import { Cadastro } from '../pages/Cadastro';
import { Login } from '../pages/Login';

export const RoutesMain = () => {
    return (
        <Routes>
            <Route path='/' element={<Cadastro />} />
            <Route path='/login' element={<Login/>} />
        </Routes>
    )
} 