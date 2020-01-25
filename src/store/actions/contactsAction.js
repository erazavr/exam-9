import {
    CONTACT_INFO_CLOSE,
    CONTACT_INFO_SHOW,
    CONTACTS_FAILURE,
    CONTACTS_REQUEST,
    CONTACTS_SUCCESS
} from "./actionTypes";
import axiosContacts from "../../axiosApi";

export const contactsRequest = () => ({type: CONTACTS_REQUEST});
export const contactsSuccess = contact => ({type: CONTACTS_SUCCESS, contact});
export const contactsFailure = error => ({type: CONTACTS_FAILURE, error});

export const contactInfoShow = () => ({type: CONTACT_INFO_SHOW});
export const contactInfoClose = () => ({type: CONTACT_INFO_CLOSE});

export const getContacts = () => {
    return async dispatch => {
        try {
            dispatch(contactsRequest());
            const response = await axiosContacts.get('/contacts.json');
            dispatch(contactsSuccess(response.data))
        }catch (e) {
            dispatch(contactsFailure(e))
        }
    }
};
export const newContactPost = contact => {
    return async dispatch => {
        try {
            dispatch(contactsRequest());
            await axiosContacts.post('/contacts.json', contact);
            dispatch(contactsSuccess())
        }catch (e) {
            dispatch(contactsFailure(e))
        }
    }
};

export const deleteContact = id => {
    return async dispatch => {
        try {
            dispatch(contactsRequest());
            await axiosContacts.delete(`/contacts/${id}.json`);
            dispatch(contactInfoClose());
            dispatch(getContacts())
        }catch (e) {
            dispatch(contactsFailure(e))
        }
    }
};
export const editedContact = (id, contact) => {
    return async dispatch => {
        try {
            dispatch(contactsRequest());
            await axiosContacts.put(`/contacts/${id}.json`, contact);
            dispatch(contactsSuccess())
        }catch (e) {
            dispatch(contactsFailure(e))
        }
    }
};