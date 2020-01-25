import {
    CONTACT_INFO_CLOSE,
    CONTACT_INFO_SHOW,
    CONTACTS_FAILURE,
    CONTACTS_REQUEST,
    CONTACTS_SUCCESS
} from "../actions/actionTypes";

const initialState = {
    contacts: null,
    toShow: false,
    loading: false,
    error: null

};
const contacts = (state = initialState, action) =>  {
    switch (action.type) {
        case CONTACTS_REQUEST:
            return {...state, loading: true};
        case CONTACTS_SUCCESS:
            return {...state, contacts: action.contact, loading: false, error: null};
        case CONTACTS_FAILURE:
            return {...state,loading: false, error: action.error};
        case CONTACT_INFO_SHOW:
            return {...state, toShow: true};
        case CONTACT_INFO_CLOSE:
            return {...state, toShow: false};
        default:
            return state
    }
};
export default contacts