import React, { useEffect } from 'react'
import { RiCloseFill } from 'react-icons/ri'
import { useDispatch } from 'react-redux'
import { romoveSingleToast, romoveToastFromLast } from '../../../../store/toast/toast.action'
import './ToastItem.scss'

function ToastItem({ toastData, index }) {
    const mergedDispatch = useDispatch()
    function removeItem(itemIndex) {
        mergedDispatch(romoveSingleToast(itemIndex))
    }
    function dynamicClass(type) {
        let dynamicClass = ''
        if (type === 'success') {
            dynamicClass = 'osh-toast__success'
        } else if (type === 'danger') {
            dynamicClass = 'osh-toast__danger'
        } else if (type === 'warning') {
            dynamicClass = 'osh-toast__warning'
        }
        return dynamicClass
    }
    useEffect(() => {
        setTimeout(() => {
            mergedDispatch(romoveToastFromLast())
        }, 2500);
    }, [])
    
    return (
        <div className={'osh-toast ' + dynamicClass(toastData.type)}>
            <span>{toastData.text}</span>
            <RiCloseFill onClick={() => removeItem(index)} />
        </div>
    )
}

export default ToastItem