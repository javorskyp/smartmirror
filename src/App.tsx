import React, { ReactElement } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import TodoistOauthRedirectPage from './pages/TodoistOauthRedirectPage';
import AppStore from './pages/AppStore';
import LoginPage from './pages/LoginPage/LoginPage';
import GlobalStyle from './theme/GlobalStyle';
import { LandingPage } from './pages/LandingPage';
import CustomMenu from './components/CustomMenu/CustomMenu';

const App: React.FC = (): ReactElement => {
    const unauthRoutes = (
        <Switch>
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Redirect to="/login" />
        </Switch>
    );

    const authRoutes = (
        <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/appstore" component={AppStore} />
            <Route path="/todoistoauthredirect" component={TodoistOauthRedirectPage} />
            <Redirect to="/" />
        </Switch>
    );

    return (
        <BrowserRouter>
            <GlobalStyle />
            <div>
                <CustomMenu />
                <div>{false ? authRoutes : unauthRoutes}</div>
            </div>
        </BrowserRouter>
    );
};

export default App;
