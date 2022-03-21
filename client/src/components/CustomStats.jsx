import React, { useState, useEffect, createContext, useContext} from "react";
const allStats = ['shootingPercentage', 'avgBoost', 'smallPads', 'timeZeroBoost', 'timeFullBoost', 'avgSpeed'];
import '../style.css';

const CustomStats = () => {
  const [shootingPercentage, setShootingPercentage] = useState(true);
  const [avgBoost, setAvgBoost] = useState(true);
  const [smallPads, setSmallPads] = useState(true);
  const [timeZeroBoost, setTimeZeroBoost] = useState(true);
  const [timeFullBoost, setTimeFullBoost] = useState(true);
  const [avgSpeed, setAvgSpeed] = useState(true);

  return (
    <div className="customStats">

      <h4>Customize My Stats</h4>

      <div>
        {
          allStats.map((item, i) => {
            return (
              <div className="toggle-switch">
                <input
                  type="checkbox"
                  className="toggleCheckbox"
                  name={item}
                  id={item}
                />
                <label className="toggle-switch-label" key={i}>{item}</label>
              </div>
            )
          })
        }
      </div>

    </div>
  )
};

export default CustomStats;