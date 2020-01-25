import React from 'react';
import {Route, Switch} from "react-router";
import ContactsPage from "./containers/ContactsPage/ContactsPage";
import Layout from "./components/Layout/Layout";
import NewContact from "./containers/NewContact/NewContact";
import EditContact from "./containers/EditContact/EditContact";

const App = () => (
    <Layout>
        <Switch>
            <Route path='/' exact component={ContactsPage}/>
            <Route path='/newContact' exact component={NewContact}/>
            <Route path='/editContact/:id' exact component={EditContact}/>
        </Switch>
    </Layout>

);

export default App;