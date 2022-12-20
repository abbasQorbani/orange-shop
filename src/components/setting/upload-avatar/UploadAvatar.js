import axios from 'axios'
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import OshButton from '../../global/button/Button'
import './UploadAvatar.scss'

function UploadAvatar() {
  const { authState } = useSelector(
      (respone) => respone
  );
  const { userData } = authState
  const [selectedFile, setSelectedFile] = useState(null)
  const [isFormValid, setIsFormValid] = useState(false)
  function handleSelectFile(event) {
    if (!validateExtension(event.target.files[0].type)) {
      return
    }
    if (!validateSize(event.target.files[0].size)) {
      return
    }
    setIsFormValid(true)
    setSelectedFile(event.target.files[0])
  }
  function validateExtension(fileExt) {
    let isValid = false
    if (fileExt === 'image/png' || fileExt === 'image/jpeg' || fileExt === 'image/jpg') {
      isValid = true
    }
    return isValid
  }
  function validateSize(fileSize) {
    let isValid = true
    if ((fileSize / 1048576).toFixed(1) > 2) {
      isValid = false
    }
    return isValid
  }
  function uploadFile() {
    const fileData = new FormData()
    fileData.append('profile-image', selectedFile)
    axios.post('http://kzico.runflare.run/user/profile-image', fileData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        authorization: "Bearer " + userData.token
      }
    })
  }
  return (
    <div className='upload-avatar'>
      <input type='file' onChange={(event) => {handleSelectFile(event)}} accept='image/*' />
      <OshButton text='Upload' disabled={!isFormValid} click={() => uploadFile()} />
    </div>
  )
}

export default UploadAvatar