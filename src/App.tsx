import React from 'react';
import './App.css';
import './components/Websocket';
import LoginPage from './auth/LoginPage';
/* import RegisterPage from './auth/RegisterPage';
import { mount, route } from 'navi'; */


//probably I should use Router because it's not works correctly

/* const routes = mount({
  "/": route({
    title: 'Login',
    view: <LoginPage/>
  }),
  "/register": route({
    title: 'Register',
    view: <RegisterPage/>
  })
}) */


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LoginPage />
      </header>
    </div>
  );
}




export default App;
