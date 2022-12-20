import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { storeAddress } from '../../../store/auth/auth.action'
import OshButton from '../../global/button/Button'
import TextInput from '../../global/text-input/TextInput'
import './CartAddress.scss'

function CartAddress() {
    const { userAddress } = useSelector(
        (respone) => respone.authState
    );
    const [city, setCity] = useState(userAddress ? userAddress.city : '')
    const [postalAddress, setPostalAddress] = useState(userAddress ? userAddress.postalAddress : '')
    const [postalCode, setPostalCode] = useState(userAddress ? userAddress.postalCode : '')
    const [mobile, setMobile] = useState(userAddress ? userAddress.mobile : '')
    const [saved, setSaved] = useState(false)
    const mergedDispatch = useDispatch();
    function handleAddressForm() {
      mergedDispatch(storeAddress({city, postalAddress, postalCode, mobile}))
      setSaved(true)
    }
    
    return (
      <div className='address-page'>
            <TextInput
                errorMessage='city must be gratter than 3 characters'
                minLength='3'
                maxLength='50'
                pattern='*'
                placeholder='city'
                defaultValue={city}
                change={(value) => {setCity(value)}} />
            <TextInput
                errorMessage='postal address must be gratter than 10 characters'
                minLength='10'
                maxLength='100'
                pattern='*'
                placeholder='postal address'
                defaultValue={postalAddress}
                change={(value) => {setPostalAddress(value)}} />
            <TextInput
                errorMessage='postal code must be gratter than 10 characters'
                minLength='10'
                maxLength='10'
                pattern='*'
                placeholder='postal code'
                defaultValue={postalCode}
                change={(value) => {setPostalCode(value)}} />
            <TextInput
                errorMessage='phone must be gratter than 11 characters'
                minLength='11'
                maxLength='11'
                pattern='*'
                placeholder='phone'
                defaultValue={mobile}
                change={(value) => {setMobile(value)}} />
            <OshButton text='Next' disabled={!(city !== '' && postalAddress !== '' && postalCode !== '' && mobile !== '')} click={handleAddressForm} />
            {
                saved && <Navigate to='/checkout'></Navigate>
            }
      </div>
    )
}

export default CartAddress