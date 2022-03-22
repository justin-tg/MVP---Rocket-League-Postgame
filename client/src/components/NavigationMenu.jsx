//Imported Tools / Programs
import React, { useState, useEffect, createContext, useContext } from "react";
import { AppContext } from './App.jsx';
import { OverviewContext } from './Overview.jsx';
import '../style.css';
import ModalStats from './ModalStats.jsx';

const NavigationMenu = () => {
  // const { updateReplayData, replayData } = useContext(AppContext);
  // const { selectedPlayer } = useContext(OverviewContext);
  return (
    <div className="navMenu">

      <h4 className="navMenuHeader">{'justaboink'}</h4>

      <div onClick={e => alert('This Feature is currently under development, please try again later')}>Dashboards (1)</div>

      <ModalStats />

      <div>My Replays</div>

      <div>Favorited Replays</div>

      <div>Replay Groups</div>

      <div>Friends</div>

      <div>My Clips</div>

      <div>First Touch Podcast</div>

      <div>RPL Account</div>

      <div>
      {'See More    '}
        <select>
          <option value="--">--</option>
          <option value="-x-">-x-</option>
          <option value="-y-">-y-</option>
          <option value="-z-">-z-</option>
        </select>
      </div>

    </div>
  )
}

export default NavigationMenu;

