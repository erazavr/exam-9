import React from 'react';
import './Contact.css'
const Contact = props => {
    return (
        <div className='Contact' onClick={props.onClick}>
            <img src={props.img} alt=""/>
            <h1>{props.name}</h1>
        </div>
    );
};

export default Contact;