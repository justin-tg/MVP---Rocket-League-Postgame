//Imported Tools / Programs
import React, { useState, useEffect, createContext, useContext } from "react";
// import { AppContext } from './App.jsx';

const LoginForm = () => {
  // const { replayData } = useContext(AppContext);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div>
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
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Insert password here..."
      />

      <input
        type="submit"
        value="Log In"
      />

    </form>

    <div onClick={(e) => console.log('clicked on register new acct')}>
        <i>click here to register a new account</i>
    </div>

    <div onClick={(e) => console.log('clicked on forgot password')}>
      <i>forgot password?</i>
    </div>

  </div>
  )
}

export default LoginForm;