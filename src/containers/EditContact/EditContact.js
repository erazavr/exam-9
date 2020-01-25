import React, {Component} from 'react';
import {editedContact, getContacts} from "../../store/actions/contactsAction";
import {connect} from "react-redux";
import ContactsForm from "../../components/ContactsForm/ContactsForm";
import Spinner from "../../components/UI/Spinner/Spinner";

class EditContact extends Component {
    state = {
        name: '',
        email: '',
        photo: '',
        phone: '',
    };
    async componentDidMount() {
        await this.props.getContacts();
        const id = this.props.match.params.id;
        const contacts = this.props.contacts;
        contacts[id] && this.setState({
            name: contacts[id].name,
            email: contacts[id].email,
            photo: contacts[id].photo,
            phone: contacts[id].phone
        })
    }
    goBack = () => {
        this.props.history.push('/')
    };
    newEditedContact = async (e) => {
        const id = this.props.match.params.id;
        e.preventDefault();
        const editedContact = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            photo: this.state.photo
        };
        await this.props.editedContact(id, editedContact);
        this.props.history.push('/')
    };
    contactInfoChanged = event => this.setState({[event.target.name]: event.target.value});
    render() {
        let form = (
            <ContactsForm
                title='Edit contact'
                onSumbit={this.newEditedContact}
                onChange={this.contactInfoChanged}
                back={this.goBack}
                name={this.state.name}
                email={this.state.email}
                phone={this.state.phone}
                photo={this.state.photo}
            />
        );
        if (this.props.loading) {
            form = <Spinner/>
        }
        return (
            <div>
                {form}
            </div>
        );
    }
}
const mapStateToProps = state => ({
    contacts: state.contacts.contacts,
    loading: state.contacts.loading,
});
const mapDispatchToProps = dispatch => ({
    getContacts: () => dispatch(getContacts()),
    editedContact: (id, contact) => dispatch(editedContact(id, contact))
});
export default connect(mapStateToProps, mapDispatchToProps)(EditContact);