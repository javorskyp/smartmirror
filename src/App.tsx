import React from 'react';
import './App.css';
import Websocket from './components/Websocket';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import TodoistOauthRedirectPage from './pages/TodoistOauthRedirectPage';
import * as configService from './services/config-service';
import AppStore from './pages/AppStore';
import LoginPage from './pages/LoginPage';
import GlobalStyle from './theme/GlobalStyle';

const getConfiguration = async () => {
  console.log((await configService.fetchConfig()).data);
}

function App() {
  return (
    <BrowserRouter>
    <GlobalStyle/>
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route exact path="/" component={Websocket} />
            <Route path="/login" component={LoginPage} />
            <Route path="/appstore" component={AppStore} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/todoistoauthredirect" component={TodoistOauthRedirectPage} />
          </Switch>
        </header>
      </div>
    </BrowserRouter >
  );
}




export default App;
