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
          <div className="shootingPercent">
            <b>Shooting Percentage: </b>{eachPlayerObj.stats.core.shooting_percentage}%
            <p>Graph of: Red Zone: --25% | Average Zone: 25%-50% | Green Zone: 50%++</p>
            <div><i>see more...</i></div>
          </div>

          <div className="avgBoost">
            <b>Average Boost Amount: </b>{eachPlayerObj.stats.boost.avg_amount} out of 100
            <p>Graph of: Red Zone: --35 boost | Average Zone: 35-50 boost | Green Zone: 50++ boost</p>
            <div><i>see more...</i></div>
          </div>

          <div className="smallPads">
            <b>Small Pads Collected: </b>{eachPlayerObj.stats.boost.count_collected_small} pads
            <p>Graph of: Red Zone: --60 pads | Average Zone: 60-75 pads | Green Zone: 75++ pads</p>
            <div><i>see more...</i></div>
          </div>

          <div className="timeZeroBoost">
            <b>Time with Zero Boost: </b>{eachPlayerObj.stats.boost.time_zero_boost} seconds
            <p>Graph of: Red Zone: 45++ sec | Average Zone: 45-35 sec | Green Zone: --35 sec</p>
            <div><i>see more...</i></div>
          </div>

          <div className="timeFullBoost">
            <b>Time with Full Boost: </b>{eachPlayerObj.stats.boost.time_full_boost} seconds
            <p>Graph of: Red Zone: 50-- sec | Average Zone: 50-70 sec | Green Zone: 70++ sec</p>
            <div><i>see more...</i></div>
          </div>

          <div className="avgSpeed">
            <b>Average Speed: </b>{eachPlayerObj.stats.movement.avg_speed}u/s
            <p>Graph of: Red Zone: 1550-- u/s | Average Zone: 1550-1675 u/s | Green Zone: 1675++ u/s</p>
            <div><i>see more...</i></div>
          </div>

          <div>...</div>
        </>
      }
    </>
  )
}

export default PlayerStats;

