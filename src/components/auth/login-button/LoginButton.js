import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { logOut } from '../../../store/auth/auth.action';
import './LoginButton.scss';

function LoginButton() {
    const mergedDispatch = useDispatch()
    const { userData } = useSelector(
        (respone) => respone.authState
    );
    const [userLoggedOut, setUserLoggedOut] = useState(false)
    function logOutUser() {
        mergedDispatch(logOut())
        setUserLoggedOut(true)
    }
    return (
        <div className='login-button'>
            {
                userData ?
                <div>{userData.email}</div> :
                <Link to='/login'>Login</Link>
            }
            {
                userData ?
                <div className='login-button__nav-wrapper'>
                    <div className='login-button__items-holder'>
                        <Link to='/profile'>Profile</Link>
                        <Link to='/orders'>Orders</Link>
                        <Link to='/setting'>Setting</Link>
                        <div onClick={logOutUser}>Log Out</div>
                    </div>
                </div> : null
            }
            {
                userLoggedOut &&
                <Navigate to='/' />
            }
        </div>
    )
}

export default LoginButton