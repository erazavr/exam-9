import React from 'react';
import './Toolbar.css'
import {NavLink} from "react-router-dom";
const Toolbar = () => (
    <header className='header'>
        <h1 style={{color: 'white'}}>Contacts</h1>
        <NavLink className='link' to='/newContact'>Add new contact</NavLink>
    </header>
);

export default Toolbar;