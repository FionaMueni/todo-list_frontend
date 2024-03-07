import React from 'react';
import "./navbar.css";
const Navbar = () => {
    return (
        <div className='nav-container'>
            <a href = "/home">Home</a>
            <a href = "/home/create">Create</a>
        </div>
    );
}

export default Navbar;
