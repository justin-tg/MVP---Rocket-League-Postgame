//Imported Tools / Programs
import React, { useState, useEffect, createContext, useContext } from "react";
import { AppContext } from './App.jsx';
import { OverviewContext } from './Overview.jsx';
import { Bar } from 'react-chartjs-2';

const PlayerStats = ( { eachPlayerObj } ) => {
  const { replayData } = useContext(AppContext);
  const { selectedPlayer } = useContext(OverviewContext);

  // console.log('sp: ', selectedPlayer); //string
  // console.log('po: ', eachPlayerObj.name); //obj
  return (
    <>
      {selectedPlayer === eachPlayerObj.name &&
        <>
          <div className="shootingPercent">
            <b>Shooting Percentage: </b>{eachPlayerObj.stats.core.shooting_percentage}%
            <p>Graph: Red Zone: --25% | Average Zone: 25%-50% | Green Zone: 50%++</p>
            <div className="seeMore"><i>see more...</i></div>
          </div>

          <div className="avgBoost">
            <b>Average Boost Amount: </b>{eachPlayerObj.stats.boost.avg_amount} out of 100
            <p>Graph: Red Zone: --35 | Average Zone: 35-50 | Green Zone: 50++ </p>
            <div className="seeMore"><i>see more...</i></div>
          </div>

          <div className="smallPads">
            <b>Small Pads Collected: </b>{eachPlayerObj.stats.boost.count_collected_small} pads
            <p>Graph: Red Zone: --60 | Average Zone: 60-75 | Green Zone: 75++</p>
            <div className="seeMore"><i>see more...</i></div>
          </div>

          <div className="timeZeroBoost">
            <b>Time with Zero Boost: </b>{eachPlayerObj.stats.boost.time_zero_boost} seconds
            <p>Graph: Red Zone: 45++ sec | Average Zone: 45-35 sec | Green Zone: --35 sec</p>
            <div className="seeMore"><i>see more...</i></div>
          </div>

          <div className="timeFullBoost">
            <b>Time with Full Boost: </b>{eachPlayerObj.stats.boost.time_full_boost} seconds
            <p>Graph: Red Zone: 50-- sec | Average Zone: 50-70 sec | Green Zone: 70++ sec</p>
            <div className="seeMore"><i>see more...</i></div>
          </div>

          <div className="avgSpeed">
            <b>Average Speed: </b>{eachPlayerObj.stats.movement.avg_speed}u/s
            <p>Graph: Red Zone: 1550-- | Average Zone: 1550-1675 | Green Zone: 1675++ </p>
            <div className="seeMore"><i>see more...</i></div>
          </div>

          <div>...</div>
        </>
      }
    </>
  )
}

export default PlayerStats;

