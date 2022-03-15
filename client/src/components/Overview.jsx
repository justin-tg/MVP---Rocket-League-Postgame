//Imported Tools / Programs
import React, { useState, useEffect, createContext, useContext } from "react";
import { AppContext } from './App.jsx';
import PlayerStats from './PlayerStats.jsx';
export const OverviewContext = createContext();

const Overview = () => {
  const { replayData } = useContext(AppContext);
  const [selectedPlayer, setSelectedPlayer] = useState(replayData.blue.players[0].name);
  const allPlayers = replayData.blue.players.concat(replayData.orange.players);

  //create a function that is passed down to the player drop down menu file that changes the selected player to the player selected given the options in the dropdown menu
  const updateSelectedPlayer = (e) => {
    console.log('dropdown evenet: ', e);
    setSelectedPlayer(e.target.value);
  };

  // console.log(allPlayers);

  return (
    <OverviewContext.Provider value={{ updateSelectedPlayer, selectedPlayer }}>

      <h4>Selected Replay: {replayData.groups[0].name}</h4>

      <div>Selected Player: {selectedPlayer}</div>

      <div>
        {allPlayers.map((eachPlayer, i)=> {
          return <PlayerStats key={i} eachPlayerObj={eachPlayer}/>
        })}
      </div>

    </OverviewContext.Provider>
  )
}

export default Overview;