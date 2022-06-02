import React from 'react';
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import RecoveryPassword from '../containers/RecoveryPassword';
import '../styles/global.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Layout>
                    <Route exact path='/login' component={Login} />
                    <Route path='/recovery-password' component={RecoveryPassword} />
                </Layout>
            </Switch>
        </BrowserRouter>
    );
}

export default App;