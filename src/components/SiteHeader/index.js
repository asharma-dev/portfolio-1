import React, { useEffect, useState } from 'react'
import SiteNavigation from '../SiteNavigation'
import Axios from 'axios'

export default function SiteHeader() {

    const [userData, setUserData] = useState({
        name: '',
        bio: '',
        avatar: '',
        loc: ''
    });

    const fetchProfile = () => {
        Axios.get('https://api.github.com/users/dalbirsrana')
        .then(res => {
            setUserData({
                name: res.data.name,
                bio: res.data.bio,
                avatar: res.data.avatar_url,
                loc: res.data.location
            })
            console.log(res)
        })
        .catch(err => console.log(err))
    }


    useEffect(() => {
        let isUnMount = false;
        if (!isUnMount) {
            fetchProfile();
        }
        return () => {
            isUnMount = true;
        }
    }, []);


    const toggleButton = function () {
        document.querySelector('.site-header').classList.toggle("active");
    }

    return (
        <header className="site-header">
            <div className="button-mobile">
                <button 
                    onClick={ toggleButton } 
                    className="main-nav-button" 
                    aria-label="menu button"
                    >
                    <i className="menu-icon"></i>
                </button>
            </div>

            <div className="site-header-container">

                <div className="site-name">
                    <h1>dalbir.me</h1>
                </div>
                
                <div className="user-intro">
                    <div className="user-avatar">
                        <img src={userData.avatar} alt="dalbir singh" />
                    </div>
                    <div className="user-name">
                        <h3>{userData.name}</h3>
                    </div>
                    <div className="user-bio">
                        <p>{userData.bio}</p>
                    </div>
                    <div className="user-loc">
                        <p>{userData.loc}</p>
                    </div>
                </div>

                <SiteNavigation hideMenu={toggleButton} />
            </div>
            <div className="back-drop"></div>
        </header>
        
    )
}