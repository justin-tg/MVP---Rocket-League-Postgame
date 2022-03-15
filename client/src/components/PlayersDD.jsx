//Imported Tools / Programs
import React, { useState, useEffect, createContext, useContext } from "react";
// import { AppContext } from './App.jsx';
import { OverviewContext } from './Overview.jsx';

const PlayerDropDown = () => {
  // const { replayData } = useContext(AppContext);
  const { allPlayers, updateSelectedPlayer, selectedPlayer } = useContext(OverviewContext);
  const [playersNamesArr, setPlayerNamesArr] = useState(null);

  // const editedMovies = this.state.originalMovies.filter(eachMovie => eachMovie.title !== movie);
  // console.log(allPlayers);

  let playersArray = [];
  allPlayers.forEach((eachPlayer) => {
    playersArray.push(eachPlayer.name);
  });

  // console.log(playersArray);

  return (
    <select onChange={e => {
      updateSelectedPlayer(e);
    }}>
      {playersArray.length && playersArray.map((player, i) => {
        return <option key={i} value={player}>{player}</option>
      })}
    </select>
  )
}

export default PlayerDropDown;

