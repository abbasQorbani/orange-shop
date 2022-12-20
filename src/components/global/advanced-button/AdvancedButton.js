import React from 'react'
import { FiPlus } from 'react-icons/fi';
import { FiMinus } from 'react-icons/fi';
import { BsFillTrash2Fill } from 'react-icons/bs';
import './AdvancedButton.scss'

function AdvancedButton({ count, onPlus, onMinus, onDelete }) {
  return (
    <div className='advanced-button'>
      <div><FiPlus onClick={onPlus} /></div>
      <span>{count}</span>
      <div><FiMinus onClick={onMinus} /></div>
      <div><BsFillTrash2Fill onClick={onDelete} className='advanced-button__trash' /></div>
    </div>
  )
}

export default AdvancedButton