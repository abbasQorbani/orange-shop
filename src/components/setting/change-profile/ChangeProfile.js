import axios from 'axios';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import OshButton from '../../global/button/Button'
import './ChangeProfile.scss'

function ChangeProfile() {
  const { authState } = useSelector(
      (respone) => respone
  );
  const { userData } = authState
  const [firstname, setFirstName] = useState('')
  const [lastname, setLastName] = useState('')
  const [gender, setGender] = useState('')
  const [age, setAge] = useState('')
  const [city, setCity] = useState('')
  function submitForm() {
    axios.put('http://kzico.runflare.run/user/change-profile', {
      firstname,
      lastname,
      gender,
      age,
      city,
    }, {
      headers: {
        authorization: "Bearer " + userData.token
      }
    })
  }
  
  return (
    <div className='change-profile'>
      <input className='change-profile__input' type='text' placeholder='first name' value={firstname} onChange={(event) => setFirstName(event.target.value)} />
      <input className='change-profile__input' type='text' placeholder='last name' value={lastname} onChange={(event) => setLastName(event.target.value)} />
      <input className='change-profile__input' type='text' placeholder='gender' value={gender} onChange={(event) => setGender(event.target.value)} />
      <input className='change-profile__input' type='text' placeholder='age' value={age} onChange={(event) => setAge(event.target.value)} />
      <input className='change-profile__input' type='text' placeholder='city' value={city} onChange={(event) => setCity(event.target.value)} />
      <OshButton text='Done' disabled={false} click={() => submitForm()} />
    </div>
  )
}

export default ChangeProfile