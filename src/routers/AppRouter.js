import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from '../components/DashboardPage';
import FoldersPage from '../components/FoldersPage';
import AddLinkPage from '../components/AddLinkPage';
import EditLinkPage from '../components/EditLinkPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true} />
                <PrivateRoute path="/dashboard" component={DashboardPage} />
                <PrivateRoute path="/folders" component={FoldersPage} />
                <PrivateRoute path="/add" component={AddLinkPage} />
                <PrivateRoute path="/edit/:id" component={EditLinkPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export { history, AppRouter as default };
