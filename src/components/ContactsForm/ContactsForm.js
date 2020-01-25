import React from 'react';
import './ContactsForm.css'
const ContactsForm = props => {
    return (
        <div>
            <h1>{props.title}</h1>
            <form action="" onSubmit={props.onSumbit} className='form'>
                        <div className='form-item'>
                            <label htmlFor="name">Name</label>
                            <input
                                id='name'
                                type="text"
                                name='name'
                                value={props.name}
                                onChange={props.onChange}
                                placeholder='Contact name'
                            />
                        </div>
                        <div className='form-item'>
                            <label htmlFor="phone">Phone</label>
                            <input
                                id='phone'
                                type="number"
                                name='phone'
                                value={props.phone}
                                onChange={props.onChange}
                                placeholder='Contact phone'
                            />
                        </div>
                        <div className='form-item'>
                            <label htmlFor="email">Email</label>
                            <input
                                id='email'
                                type="email"
                                name='email'
                                value={props.email}
                                onChange={props.onChange}
                                placeholder='Contact email'
                            />
                        </div>
                        <div className='form-item'>
                            <label htmlFor="photo">Photo</label>
                            <input
                                id='photo'
                                type="text"
                                name='photo'
                                value={props.photo}
                                onChange={props.onChange}
                                placeholder='Contact photo'
                            />
                        </div>
                <div>
                    <h3>Photo preview:</h3>
                    <img className='photoPreview' src={props.photo} alt=""/>
                </div>
                <button type='submit' className='form-btn'>Save</button>
                <button
                    className='form-btn'
                    type='button'
                    onClick={props.back}
                >Back to Contacts
                </button>
            </form>

        </div>
    );
};

export default ContactsForm;