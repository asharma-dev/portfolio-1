import React from 'react';

import { Link } from 'react-router-dom';



const SiteNav = ({toggleButton}) => (
    
    <nav className="site-main-nav">

        <div className="nav-wrapper">
            <ul>
                <li>
                    <Link to="." onClick={ toggleButton }>Home</Link>
                </li>

                <li>
                    <Link to="./resume" onClick={toggleButton}>Resume</Link>
                </li>
                
                <li>
                    <Link to="./contact" onClick={toggleButton}>Contact</Link>
                </li>

                <li>
                    <Link to="./blog" onClick={toggleButton}>Blog</Link>
                </li>

            </ul>
        </div>
        
    </nav>

);

export default SiteNav;