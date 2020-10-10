import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import RegisterPage from './pages/RegisterPage';
import TodoistOauthRedirectPage from './pages/TodoistOauthRedirectPage';
import * as configService from './services/config-service';
import AppStore from './pages/AppStore';
import LoginPage from './pages/LoginPage';
import GlobalStyle from './theme/GlobalStyle';
import { LandingPage } from './pages/LandingPage';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const getConfiguration = async () => {
  console.log((await configService.fetchConfig()).data);
}

const StyledLink = styled.p`
    & > * {
        color: white;
    }
`

const App = (props) => {
  const unauthRoutes = <Switch>
    <Route path="/login" component={LoginPage} />
    <Route path="/register" component={RegisterPage} />
    <Redirect to="/login" />
  </Switch>;

  const authRoutes = <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/appstore" component={AppStore} />
    <Route path="/todoistoauthredirect" component={TodoistOauthRedirectPage} />
    <Redirect to="/" />
  </Switch>;

  const authLinks = <div>
    <StyledLink><Link to="/appstore">Appstore</Link></StyledLink>
  </div>

  const unauthLinks = <div>

  </div>

  return (

    <BrowserRouter>
      <GlobalStyle />
      <div>
        <header>
          {props.loggedIn ? authLinks : unauthLinks}
        </header>
        <div>
          {props.loggedIn ? authRoutes : unauthRoutes}
        </div>
      </div>
    </BrowserRouter >
  );
}

const mapStateToProps = state => {
  return {
    loggedIn: state.authReducer.loggedIn
  }
}

export default connect(mapStateToProps)(App);
