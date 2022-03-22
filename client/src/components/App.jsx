//Imported Tools / Programs
import React, { useState, useEffect, createContext, useContext } from "react";
import axios from 'axios';
export const AppContext = createContext();
//Imported Files
import Chart from './Chart.jsx';
import CustomStats from './CustomStats.jsx';
import Footer from './Footer.jsx';
import Hardcoded from './Hardcoded.jsx';
import Header from './Header.jsx';
import LoginForm from './LoginForm.jsx';
import MyModal from './Modal.jsx';
import NavigationMenu from './NavigationMenu.jsx';
import Overview from './Overview.jsx';
import '../style.css';
//Declared Variabls
const API = '/replays';

const App = () => {
  const [replayData, setReplayData] = useState(Hardcoded);


  const updateReplayData = (id) => {
    console.log(typeof id, id);
    axios
    .post(API, {id} )
    .then(res => {
      const data = res.data;
      setReplayData(data);
    })
    .catch(err => alert('invalid replay id please try again'))
    return;
  }

  return (
    <AppContext.Provider value={{ updateReplayData, replayData }}>
      <div>

        <Header/>

        <div className="mamma">
          <NavigationMenu/>
          <Overview/>
          <LoginForm/>
        </div>

        <Footer/>

      </div>
    </AppContext.Provider>
  )
}

export default App;