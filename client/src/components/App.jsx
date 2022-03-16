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
const API = '/replays';

const App = () => {
  const [replayData, setReplayData] = useState(Hardcoded);


  const updateReplayData = (id) => {
    console.log(typeof id, id);
    axios
    .post(API, {id} )
    .then(res => console.log('post request success'))
    .catch(err => console.log('invalid replay id please try again'))
  }

  return (
    <AppContext.Provider value={{ updateReplayData, replayData }}>
      <div>

        <Header/>

        <LoginForm/>

        <Overview/>

      </div>
    </AppContext.Provider>
  )
}

export default App;