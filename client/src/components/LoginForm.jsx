//Imported Tools / Programs
import React, { useState, useEffect, createContext, useContext } from "react";
// import { AppContext } from './App.jsx';
import '../style.css';


const LoginForm = () => {
  // const { replayData } = useContext(AppContext);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div className="login">

      <form className="loginForm" onSubmit={(e) => {
        e.preventDefault();
        alert('Login Successful Please Wait... loading...loading...loading...');
        //invoke passed down POST function to login in to an existing user
        //loginToUserAccount(email, password);
      }}>

        <input
          className="emailForm"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="username/email..."
        />

        <input
          className="passwordForm"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password..."
        />

        <input
          className="loginButton"
          type="submit"
          value="Log In"
        />

      </form>

      <div className="forgotPW" onClick={(e) => console.log('clicked on forgot password')}>
        <i>Forgot password?</i>
      </div>

      <div className="newAccount" onClick={(e) => console.log('clicked on register new acct')}>
          <i>Create a new account</i>
      </div>

    </div>
  )
}

export default LoginForm;