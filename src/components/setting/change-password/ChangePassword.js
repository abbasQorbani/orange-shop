import axios from 'axios'
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import OshButton from '../../global/button/Button'
import './ChangePassword.scss'

function ChangePassword() {
  const { authState } = useSelector(
      (respone) => respone
  );
  const { userData } = authState
  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  function callPasswordApi() {
    axios.put('http://kzico.runflare.run/user/change-password',
    {
      old_password: oldPassword,
      new_password: newPassword,
    },
    {
      headers: {
        authorization: "Bearer " + userData.token
      },
    })
  }
  return (
    <div className='change-password'>
      <input
        type='password' name='old' placeholder='Old password'
        value={oldPassword}
        onChange={(event) => {setOldPassword(event.target.value);}} />
      <input
        type='password' name='new' placeholder='New Password'
        value={newPassword}
        onChange={(event) => {setNewPassword(event.target.value);}} />
      <input
        type='password' name='repeat' placeholder='Repeat New Password'
        value={repeatPassword}
        onChange={(event) => {setRepeatPassword(event.target.value);}} />
      <OshButton text='Change Password' disabled={
        oldPassword === '' || newPassword === '' || repeatPassword === '' || newPassword !== repeatPassword
        } click={() => callPasswordApi()} />
    </div>
  )
}

export default ChangePassword