import React from 'react'
import SiteNavigation from '../SiteNavigation'
import { Link } from 'react-router-dom';

export default function SiteHeader() {

    const toggleButton = function () {
        const siteHeader = document.querySelector('.site-header');
        siteHeader.classList.toggle("active");
    }

    const hideMenu = () => {    
        const siteHeader = document.querySelector('.site-header');
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

                <div className="site-title"><h2>dalbir.me</h2></div>
                
                <SiteNavigation toggleButton={toggleButton} />

                <div className="copy-note">&copy; dalbir.me<br></br>All rights reserved.</div>

            </div>
            <div className="back-drop"></div>
        </header>
        
    )
}