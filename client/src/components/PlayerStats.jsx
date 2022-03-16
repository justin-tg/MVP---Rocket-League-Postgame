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
          <div className="shootingPercent">Shooting Percentage: {eachPlayerObj.stats.core.shooting_percentage}%</div>

          <div className="avgBoost">Average Boost Amount: {eachPlayerObj.stats.boost.avg_amount} out of 100</div>

          <div className="smallPads">Small Pads Collected: {eachPlayerObj.stats.boost.count_collected_small} pads</div>

          <div className="timeZeroBoost">Time with Zero Boost: {eachPlayerObj.stats.boost.time_zero_boost} seconds</div>

          <div className="timeFullBoost">Time with Full Boost: {eachPlayerObj.stats.boost.time_full_boost} seconds</div>

          <div className="avgSpeed">Average Speed: {eachPlayerObj.stats.movement.avg_speed}u/s</div>
        </>
      }
    </>
  )
}

export default PlayerStats;

