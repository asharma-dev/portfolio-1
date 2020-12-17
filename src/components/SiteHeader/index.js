import React, { useEffect, useState } from 'react'
import SiteNavigation from '../SiteNavigation'
import Axios from 'axios'
import { Link } from 'react-router-dom';

import GithubIcon from '../../assets/icon-png/github.png';
import LinkedinIcon from '../../assets/icon-png/linkedin.png';

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

    const siteHeader = document.querySelector('.site-header');

    const toggleButton = function () {
        siteHeader.classList.toggle("active");
    }

    const hideMenu = () => {    
        if (siteHeader.classList.contains('active')) {
            siteHeader.classList.remove('active')
        }
    }

    return (
        <header className="site-header">
            <div className="header-mobile">
                
                <h2>
                    <Link to="./" onClick={ hideMenu }>dalbir.me</Link>
                </h2>
                
                <button 
                    onClick={ toggleButton } 
                    className="main-nav-button" 
                    aria-label="menu button"
                    >
                    <i className="menu-icon"></i>
                </button>
            </div>

            <div className="site-header-container">
                
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
                   

                    <ul className="user-social">
                        <li>
                            <a href="https://github.com/dalbirsrana">
                               <img src={GithubIcon} alt="GitHub" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/dalbirsrana/">
                                <img src={LinkedinIcon} alt="Linkedin" />
                            </a>
                        </li>
                    </ul>
                </div>



                <SiteNavigation toggleButton={toggleButton} />

            </div>
            <div className="back-drop"></div>
        </header>
        
    )
}