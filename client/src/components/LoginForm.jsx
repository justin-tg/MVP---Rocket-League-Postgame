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
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Insert Email Here..."
      />

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Insert password here..."
      />

      <input
        type="submit"
        value="Log In"
      />

    </form>

    <div onClick={(e) => console.log('clicked on forgot password')}>
      <i>Forgot password?</i>
    </div>

    <div onClick={(e) => console.log('clicked on register new acct')}>
        <i>Create a new account</i>
    </div>

  </div>
  )
}

export default LoginForm;