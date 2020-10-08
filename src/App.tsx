import React from 'react';
import './App.css';
import Websocket from './components/Websocket';
import { BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import TodoistOauthRedirectPage from './pages/TodoistOauthRedirectPage';
import * as configService from './services/config-service';
import AppStore from './pages/AppStore';
import LoginPage from './pages/LoginPage';
import GlobalStyle from './theme/GlobalStyle';
import { connect } from 'react-redux';

const getConfiguration = async () => {
  console.log((await configService.fetchConfig()).data);
}

const App = (props) => {
  const unauthRoutes = <Switch>
    <Route path="/login" component={LoginPage} />
    <Route path="/register" component={RegisterPage} />
    <Redirect to="/login" />
  </Switch>;

  const authRoutes = <Switch>
    <Route exact path="/" component={Websocket} />
    <Route path="/appstore" component={AppStore} />
    <Route path="/todoistoauthredirect" component={TodoistOauthRedirectPage} />
    <Redirect to="/" />
  </Switch>;

  return (
    
    <BrowserRouter>
      <GlobalStyle />
      <p>Choose authlogin <Link to="/appstore">Appstore</Link></p>
      <div className="App">
        <header className="App-header">
          {props.loggedIn ? authRoutes : unauthRoutes}
        </header>
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
