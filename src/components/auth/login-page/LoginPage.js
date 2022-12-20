import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate } from 'react-router-dom'
import { login } from '../../../store/auth/auth.action'
import OshButton from '../../global/button/Button'
import './LoginPage.scss'

function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const mergedDispatch = useDispatch();
  const { userData } = useSelector(
      (respone) => respone.authState
  );
  function handleLogin() {
    mergedDispatch(login({email, password}))
  }
  return (
    <div className='login-page'>
        <input
          className='login-page__input'
          type='text' placeholder='user name / email'
          value={email}
          onChange={(event) => setEmail(event.target.value)} />
        <input
          className='login-page__input'
          type='password' placeholder='password'
          value={password}
          onChange={(event) => setPassword(event.target.value)} />
        <div className='login-page__action-holder'>
            <OshButton text='Log In' disabled={false} click={handleLogin} />
            <Link to='/sign-up'>Sign Up</Link>
        </div>
          {
              userData &&
              <Navigate to='/cart' />
          }
    </div>
  )
}

export default LoginPage