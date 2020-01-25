import React from 'react';
import {NavLink} from "react-router-dom";
import './ContactInfo.css'
const ContactInfo = props => {
    return (
        <div className='Info'>
            <div>
                <img src={props.photo} alt=""/>
            </div>
            <div className='Info-data'>
                <h1>{props.name}</h1>
                <p><i className="fas fa-phone-alt"/>{props.phone}</p>
                <p><i className="fas fa-envelope"/>{props.email}</p>
            </div>
            <div>
                <NavLink className='edit btn' to={props.to}><i className="fas fa-edit"/>Edit</NavLink>
                <button className='info-btn btn' onClick={props.remove}><i className="fas fa-trash-alt"/>Delete</button>
            </div>
            <button className='close' onClick={props.close}><i className="fas fa-times"/></button>
        </div>
    );
};

export default ContactInfo;