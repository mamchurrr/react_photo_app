import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss'

const Header = () => {
    return (
        <div id="header">
            <ul>
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink to="/gallery">Gallery</NavLink></li>
                <li><NavLink to="/contacts">Contacts</NavLink></li>
            </ul>
        </div>
    ) 
}

export default Header;
