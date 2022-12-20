import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getProfile } from '../../../store/auth/auth.action';
import './ProfilePage.scss'

function ProfilePage() {
    const mergedDispatch = useDispatch()
    const { user } = useSelector(
        (respone) => respone.authState.profileInfo
    );
    const [hasToken, setHasToken] = useState(null)
    function checkToken() {
        if (localStorage.getItem('user') && JSON.parse(localStorage.getItem('user')).token) {
            setHasToken(true)
            return
        }
        setHasToken(false)
    }
    useEffect(() => {
        checkToken()
        mergedDispatch(getProfile())
    }, [])
    return (
        <div className='profile-page'>
            {
                hasToken === false &&
                <Navigate to="/ad-list" />
            }
            {
                user &&
                <div className='profile-page__image-holder'>
                    <img src={user.image} alt={user.username} />
                </div>
            }
            {
                user && user.email &&
                <p>email: {user.email}</p>
            }
            {
                user && user.username &&
                <p>user name: {user.username}</p>
            }
            {
                user && user.mobile &&
                <p>mobile: {user.mobile}</p>
            }
            {
                user && user.firstname &&
                <p>first name: {user.firstname}</p>
            }
            {
                user && user.lastname &&
                <p>last name: {user.lastname}</p>
            }
            {
                user && user.gender &&
                <p>gender: {user.gender}</p>
            }
            {
                user && user.age &&
                <p>age: {user.age}</p>
            }
            {
                user && user.city &&
                <p>city: {user.city}</p>
            }
        </div>
    )
}

export default ProfilePage