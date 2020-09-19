import React from 'react';
import './App.css';
import Websocket from './components/Websocket';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import TodoistOauthRedirectPage from './pages/TodoistOauthRedirectPage';
import { CLIENT_ID, CLIENT_SECRET, SCOPE } from './env';
import * as firebaseService from './services/firebase-serivce';


function App() {
  return (
    <BrowserRouter>
      <Websocket />
      <button onClick={firebaseService.fetchGoogleToken}>
        Google signin
      </button>
      <a href={`https://todoist.com/oauth/authorize?client_id=${CLIENT_ID}&scope=${SCOPE}&state=${CLIENT_SECRET}`}>
        Link z OAuth dla todoist
      </a>
      <>
        <div className="App">
          <header className="App-header">
            <Switch>
              <Route exact path="/" component={LoginPage} />
              <Route path="/register" component={RegisterPage} />
              <Route path="/todoistoauthredirect" component={TodoistOauthRedirectPage} />
            </Switch>
          </header>
        </div>
      </>
    </BrowserRouter>
  );
}




export default App;
