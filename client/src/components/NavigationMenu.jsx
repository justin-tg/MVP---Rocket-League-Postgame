//Imported Tools / Programs
import React, { useState, useEffect, createContext, useContext } from "react";
import { AppContext } from './App.jsx';
import { OverviewContext } from './Overview.jsx';
import '../style.css';

const NavigationMenu = () => {
  // const { updateReplayData, replayData } = useContext(AppContext);
  // const { selectedPlayer } = useContext(OverviewContext);
  return (
    <div className="navMenu">

      <h4>Navigation Menu</h4>

      <div>RPL Account Settings</div>

      <div>Dashboards (1)</div>

      <div>Custom Analytics</div>

      <div>My Replays</div>

      <div>Favorited Replays</div>

      <div>Friends</div>

      <div>My Clips</div>

      <div>...</div>

    </div>
  )
}

export default NavigationMenu;

