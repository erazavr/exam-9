import React, {Component, Fragment} from 'react';
import Contact from "../../components/Contact/Contact";
import {contactInfoClose, contactInfoShow, deleteContact, getContacts} from "../../store/actions/contactsAction";
import {connect} from "react-redux";
import Modal from "../../components/UI/Modal/Modal";
import ContactInfo from "../../components/ContactInfo/ContactInfo";

class ContactsPage extends Component {
    state = {
        id: null
    };
    componentDidMount() {
        this.props.getContacts()
    }
    render() {
        const contacts = this.props.contacts;
        return (
            <Fragment>
                <div>
                    {contacts &&
                    Object.keys(contacts).map(contact => (
                        <div key={contact} onClick={()=> this.setState({id: contact})}>
                        <Contact
                            name={contacts[contact].name}
                            img={contacts[contact].photo}
                            onClick={this.props.contactInfoShow}
                        />
                        </div>
                    ))
                    }
                </div>
                {contacts && this.state.id &&
                <Modal
                    show={this.props.toShow}
                    close={this.props.contactInfoClose}
                    >
                    { contacts[this.state.id] &&
                        <ContactInfo
                            close={this.props.contactInfoClose}
                            photo={contacts[this.state.id].photo}
                            name={contacts[this.state.id].name}
                            phone={contacts[this.state.id].phone}
                            email={contacts[this.state.id].email}
                            to={`/editContact/${this.state.id}`}
                            remove={()=> this.props.deleteContact(this.state.id)}
                        />
                    }
                </Modal>
                }
            </Fragment>
        );
    }
}
const mapStateToProps = state => ({
    contacts: state.contacts.contacts,
    toShow: state.contacts.toShow
});
const mapDispatchToProps = dispatch => ({
    getContacts: () => dispatch(getContacts()),
    contactInfoShow: () => dispatch(contactInfoShow()),
    contactInfoClose: () => dispatch(contactInfoClose()),
    deleteContact: (id) => dispatch(deleteContact(id))
});
export default connect(mapStateToProps, mapDispatchToProps) (ContactsPage);