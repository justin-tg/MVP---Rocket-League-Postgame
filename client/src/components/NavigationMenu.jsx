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

      <h4 className="navMenuHeader">{'<current_user>'}</h4>

      <div>Dashboards (1)</div>

      <div>Customize Analysis</div>

      <div>My Replays</div>

      <div>Favorited Replays</div>

      <div>Replay Groups</div>

      <div>Friends</div>

      <div>My Clips</div>

      <div>First Touch Podcast</div>

      <div>RPL Account</div>

      <div>
        <select>
          <option value="--">--</option>
          <option value="-x-">-x-</option>
          <option value="-y-">-y-</option>
          <option value="-z-">-z-</option>
        </select>
        {'    See More'}
      </div>

    </div>
  )
}

export default NavigationMenu;

