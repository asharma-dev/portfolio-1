import React from 'react';

import { Link } from 'react-router-dom';



const SiteNav = ({hideMenu}) => (
    
    <nav className="site-main-nav">

        <div className="nav-wrapper">
            <ul>
                <li>
                    <Link to="." onClick={ hideMenu }>Home</Link>
                </li>
                <li>
                    <Link to="./blog" onClick={hideMenu}>Blog</Link>
                </li>
                <li>
                    <Link to="./Work" onClick={hideMenu}>Work</Link>
                </li>
                <li>
                    <Link to="./about" onClick={hideMenu}>About</Link>
                </li>
                <li>
                    <Link to="./contact" onClick={hideMenu}>Contact</Link>
                </li>
            </ul>
        </div>
        
    </nav>

);

export default SiteNav;