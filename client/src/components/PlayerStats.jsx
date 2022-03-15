//Imported Tools / Programs
import React, { useState, useEffect, createContext, useContext } from "react";
import { AppContext } from './App.jsx';
import { OverviewContext } from './Overview.jsx';

const PlayerStats = ( { eachPlayerObj } ) => {
  const { replayData } = useContext(AppContext);
  const { selectedPlayer } = useContext(OverviewContext);

  // console.log('sp: ', selectedPlayer); //string
  // console.log('po: ', eachPlayerObj.name); //obj
  return (
    <>
      {selectedPlayer === eachPlayerObj.name &&
        <>
          <div className="shootingPercent">Shooting Percentage: {eachPlayerObj.stats.core.shooting_percentage}</div>

          <div className="avgBoost">Average Boost Amount: {eachPlayerObj.stats.boost.avg_amount}</div>

          <div className="smallPads">Small Pads Collected: {eachPlayerObj.stats.boost.amount_collected_small}</div>

          <div className="smallPads">Small Pads Collected: {eachPlayerObj.stats.boost.amount_collected_small}</div>

          <div className="smallPads">Small Pads Collected: {eachPlayerObj.stats.boost.amount_collected_small}</div>

          <div className="smallPads">Small Pads Collected: {eachPlayerObj.stats.boost.amount_collected_small}</div>
        </>
      }
    </>
  )
}

export default PlayerStats;

