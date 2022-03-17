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
      <div className="overview">

        <Search/>

        <div className="overviewHeader">
          <div className="selectedReplay"><b>Selected Replay: </b>{replayData.id.substring(0, 15)}...</div>
          <b>Selected Player:</b><PlayerDropDown/>
        </div>

        <div className="playerStats">
          {allPlayers.map((eachPlayer, i)=> {
            return <PlayerStats key={i} eachPlayerObj={eachPlayer}/>
          })}
        </div>

      </div>

    </OverviewContext.Provider>
  )
}

export default Overview;