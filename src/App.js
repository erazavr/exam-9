import React from 'react';
import {Route, Switch} from "react-router";
import ContactsPage from "./containers/ContactsPage/ContactsPage";

const App = () => (
    <Switch>
      <Route path='/' exact component={ContactsPage}/>
    </Switch>
);

export default App;