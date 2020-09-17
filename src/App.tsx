import React from 'react';
import './App.css';
import './components/Websocket';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';


function App() {
  return (
    <BrowserRouter>
      <>
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route exact path="/" component={LoginPage}/>
            <Route path="/register" component={RegisterPage}/>
          </Switch>
        </header>
      </div>
      </>
    </BrowserRouter>
  );
}




export default App;
