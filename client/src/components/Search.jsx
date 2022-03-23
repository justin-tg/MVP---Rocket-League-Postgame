//Imported Tools / Programs
import React, { useState, useEffect, createContext, useContext } from "react";
import { AppContext } from './App.jsx';
// import { OverviewContext } from './Overview.jsx';

const Search = ( { eachPlayerObj } ) => {

  const { updateReplayData, replayData } = useContext(AppContext);
  // const { selectedPlayer } = useContext(OverviewContext);
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
    <form className="search" onSubmit={(e) => {
      e.preventDefault();
      console.log('Requesting Replay Data Please Wait... loading...loading...loading...');
      //postreq for new replay id
      updateReplayData(searchTerm);
    }}>

      <input
        className="searchForm"
        type="text"
        value={searchTerm}
        onChange={e => {setSearchTerm(e.target.value)}}
        placeholder="analyze replay id here..."
      />

      <input
        className="searchButton"
        type="submit"
        value="Search"
      />

    </form>
    </>
  )
}

export default Search;

