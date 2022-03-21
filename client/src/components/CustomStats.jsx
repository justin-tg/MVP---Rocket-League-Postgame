import '../style.css';
import React, { useState, useEffect, createContext, useContext} from "react";
const allStats = ['shootingPercentage', 'avgBoost', 'smallPads', 'timeZeroBoost', 'timeFullBoost', 'avgSpeed'];
import EachStatItem from './EachStatItem.jsx';

const CustomStats = () => {
  // const [shootingPercentage, setShootingPercentage] = useState(true);
  // const [avgBoost, setAvgBoost] = useState(true);
  // const [smallPads, setSmallPads] = useState(true);
  // const [timeZeroBoost, setTimeZeroBoost] = useState(true);
  // const [timeFullBoost, setTimeFullBoost] = useState(true);
  // const [avgSpeed, setAvgSpeed] = useState(true);

  return (
    <div className="customStats">

      <h4>Customize My Stats</h4>

      <ul>
        {allStats.map((item, i) =>
          <EachStatItem statName={item} key={i} setActive={false}/>
        )}
      </ul>

    </div>
  )
};

export default CustomStats;