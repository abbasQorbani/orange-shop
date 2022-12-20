import React from 'react'
import './Toast.scss'
import { useSelector } from 'react-redux';
import ToastItem from './toast-item/ToastItem';

function Toast() {
    const { toastList } = useSelector((response) => response.toastState)
    return (
        <div className='osh-toast-wrapper'>
        {
            toastList.map((toastData, index) => {
                return <ToastItem toastData={toastData} index={index} key={index} />
            })
        }
        </div>
    )
}

export default Toast