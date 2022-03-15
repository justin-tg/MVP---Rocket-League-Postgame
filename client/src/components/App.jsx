//Imported Tools / Programs
import React, { useState, useEffect, createContext, useContext } from "react";
import axios from 'axios';
export const AppContext = createContext();
//Imported Files
import Hardcoded from './Hardcoded.jsx';
import Header from './Header.jsx';
import LoginForm from './LoginForm.jsx';
import Overview from './Overview.jsx';
//Declared Variabls
const API = '';

const App = () => {
  const [replayData, setReplayData] = useState(Hardcoded);

  return (
    <AppContext.Provider value={{replayData }}>
      <div>

        <Header/>

        <LoginForm/>

        <Overview/>

      </div>
    </AppContext.Provider>
  )
}

export default App;