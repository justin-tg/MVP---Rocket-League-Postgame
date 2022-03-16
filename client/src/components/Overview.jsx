//Imported Tools / Programs
import React, { useState, useEffect, createContext, useContext } from "react";
import { AppContext } from './App.jsx';
import PlayerStats from './PlayerStats.jsx';
import PlayerDropDown from './PlayersDD.jsx';
import Search from './Search.jsx';
export const OverviewContext = createContext();

const Overview = () => {
  const { replayData } = useContext(AppContext);
  const [ selectedPlayer, setSelectedPlayer] = useState(replayData.blue.players[0].name);

  const allPlayers = replayData.blue.players.concat(replayData.orange.players);

  const updateSelectedPlayer = (e) => {
    setSelectedPlayer(e.target.value);
  };

  return (
    <OverviewContext.Provider value={{ allPlayers, updateSelectedPlayer, selectedPlayer }}>

      <Search/>

      <h4>Selected Replay: {replayData.groups[0].name}</h4>

      <div>Selected Player: {selectedPlayer}</div>

      <PlayerDropDown/>

      <div>
        {allPlayers.map((eachPlayer, i)=> {
          return <PlayerStats key={i} eachPlayerObj={eachPlayer}/>
        })}
      </div>

    </OverviewContext.Provider>
  )
}

export default Overview;