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
          <div>
            <div>
              <b>Shooting Percentage:</b>
              <div>{eachPlayerObj.stats.core.shooting_percentage}%</div>
            </div>
            <p> Red Zone: --25%  |  Average: 25%-50%  |  Green Zone: 50%++</p>
            <span>see more...</span>
          </div>

          <div>
            <div>
              <b>Average Boost Amount: </b>
              <div>{eachPlayerObj.stats.boost.avg_amount} / 100</div>
            </div>
            <p>Red Zone: --35  |  Average: 35-50  |  Green Zone: 50++ </p>
            <span>see more...</span>
          </div>

          <div>
            <div>
              <b>Small Pads Collected: </b>
              <div>{eachPlayerObj.stats.boost.count_collected_small} pads</div>
            </div>
            <p>Red Zone: --60  |  Average: 60-75  |  Green Zone: 75++</p>
            <span>see more...</span>
          </div>

          <div>
            <div>
              <b>Time with Zero Boost: </b>
              <div>{eachPlayerObj.stats.boost.time_zero_boost} seconds</div>
            </div>
            <p>Red Zone: 45++  |  Average: 45-35  |  Green Zone: --35</p>
            <span>see more...</span>
          </div>

          <div>
            <div>
              <b>Time with Full Boost: </b>
              <div>{eachPlayerObj.stats.boost.time_full_boost} seconds</div>
            </div>
            <p>Red Zone: 50-- sec  |  Average: 50-70 sec  |  Green Zone: 70++ sec</p>
            <span>see more...</span>
          </div>

          <div>
            <div>
              <b>Average Speed: </b>
              <div>{eachPlayerObj.stats.movement.avg_speed}u/s</div>
            </div>
            <p>Red Zone: 1550--  |  Average: 1550-1675  |  Green Zone: 1675++ </p>
            <span>see more...</span>
          </div>

          <div>
            <b>Statistics coming out soon:</b>
            <p>
              saves | assists | score | demos_for | time_supersonic_speed | air_time | ...
            </p>
          </div>
        </>
      }
    </>
  )
}

export default PlayerStats;

