import { Route, Routes } from 'react-router-dom';
import { Dashboard } from '../pages/Dashboard';
import { Login } from '../pages/Login';
import { Contatos } from '../pages/Contatos';

export const RoutesMain = () => {
    return (
        <Routes>
            <Route path='/' element={<Login/>} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/dashboard/contatos' element={<Contatos/>} />
        </Routes>
    )
} 