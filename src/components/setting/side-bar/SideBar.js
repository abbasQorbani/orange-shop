import React, { useState } from 'react'
import './SideBar.scss'

function SideBar({ click }) {
    const [selectedTab, setSelectedTab] = useState('profile')
    function changeTabToProfile() {
        click('profile')
        setSelectedTab('profile')
    }
    function changeTabToPassword() {
        click('password')
        setSelectedTab('password')
    }
    function changeTabToAvatar() {
        click('avatar')
        setSelectedTab('avatar')
    }
    return (
        <div className='side-bar'>
            <div className={selectedTab === 'profile' ? 'side-bar__item side-bar__item--active' : 'side-bar__item'} onClick={changeTabToProfile}>change profile</div>
            <div className={selectedTab === 'password' ? 'side-bar__item side-bar__item--active' : 'side-bar__item'} onClick={changeTabToPassword}>change password</div>
            <div className={selectedTab === 'avatar' ? 'side-bar__item side-bar__item--active' : 'side-bar__item'} onClick={changeTabToAvatar}>upload avatar</div>
        </div>
    )
}

export default SideBar