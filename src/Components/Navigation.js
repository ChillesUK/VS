import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/About'>About Us</NavLink>
            <NavLink to='/Contact-Us'>Contact Us</NavLink>
        </div>
    );
};

export default Navigation;