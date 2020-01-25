import React, {Component} from 'react';
import {newContactPost} from "../../store/actions/contactsAction";
import {connect} from "react-redux";
import ContactsForm from "../../components/ContactsForm/ContactsForm";
import Spinner from "../../components/UI/Spinner/Spinner";

class NewContact extends Component {
    state = {
        name: '',
        email: '',
        photo: '',
        phone: '',
    };
    contactInfoChanged = event => this.setState({[event.target.name]: event.target.value});
    goBack = () => {
        this.props.history.push('/')
    };
    newContactSend = async (e) => {
        e.preventDefault();
        const newContact = {
            name: this.state.name,
            email: this.state.email,
            photo: this.state.photo,
            phone: this.state.phone
        };
        await this.props.newContactPost(newContact);
        this.props.history.push('/')
    };

    render() {
        let form = (
            <ContactsForm
                title='Add new contact'
                onSumbit={this.newContactSend}
                onChange={this.contactInfoChanged}
                back={this.goBack}
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
    loading: state.contacts.loading,
    error: state.contacts.error
});
const mapDispatchToProps = dispatch => ({
   newContactPost: contact => dispatch(newContactPost(contact))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewContact);