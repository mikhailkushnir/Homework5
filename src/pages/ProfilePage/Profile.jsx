import React from 'react'
import { useNavigate } from 'react-router-dom'
import './style.scss'
import { BaseButton } from '../../components/Button/Button'


export const ProfilePage = ({ setModalActive }) => {

    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem('token');
        setModalActive(true);
        navigate('/login');
    }

    return <div className='profile'>               
                <BaseButton onClick={logout} >Logout</BaseButton>                   
            </div>   
}