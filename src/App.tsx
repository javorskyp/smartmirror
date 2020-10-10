import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import RegisterPage from './pages/RegisterPage';
import TodoistOauthRedirectPage from './pages/TodoistOauthRedirectPage';
import AppStore from './pages/AppStore';
import LoginPage from './pages/LoginPage/LoginPage';
import GlobalStyle from './theme/GlobalStyle';
import { LandingPage } from './pages/LandingPage';
import CustomMenu from './components/CustomMenu/CustomMenu';

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

  return (

    <BrowserRouter>
      <GlobalStyle />
      <div>
        <CustomMenu loggedIn={props.loggedIn} />
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
