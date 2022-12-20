import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { signUp } from '../../../store/auth/auth.action';
import OshButton from '../../global/button/Button';
import './SignUpPage.scss'

function SignUpPage() {
    const [username, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [mobile, setMobile] = useState('')
    const mergedDispatch = useDispatch();
    const { signedUp } = useSelector(
        (respone) => respone.authState
    );
    function handleSignUp() {
      mergedDispatch(signUp({username, email, password, mobile}))
    }
    return (
      <div className='sign-up-page'>
            <input
                className='sign-up-page__input'
                type='text' placeholder='user name'
                value={username}
                onChange={(event) => setUserName(event.target.value)} />
            <input
                className='sign-up-page__input'
                type='text' placeholder='email'
                value={email}
                onChange={(event) => setEmail(event.target.value)} />
            <input
                className='sign-up-page__input'
                type='password' placeholder='password'
                value={password}
                onChange={(event) => setPassword(event.target.value)} />
            <input
                className='sign-up-page__input'
                type='password' placeholder='confirm password'
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)} />
            <input
                className='sign-up-page__input'
                type='text' placeholder='phone'
                value={mobile}
                onChange={(event) => setMobile(event.target.value)} />
            <OshButton text='Sign Up' disabled={false} click={handleSignUp} />
            {
                signedUp &&
                <Navigate to='/login' />
            }
      </div>
    )
}

export default SignUpPage