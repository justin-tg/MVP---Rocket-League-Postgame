import React, {useState, useEffect, createContext, useContext} from 'react';

const EachStatItem = ({ statName }) => {
  const [active, setActive] = useState(false);

  return (
    <div className="eachFriend">

      <input
        type="checkbox"
        onChange={e => {
          console.log(`${statName} 's box was selected`);
          if (active) { setActive(false);
          } else { setActive(true); }
        }}
        className={active ? 'active' : 'hide'}
      />
      <label>{statName}</label>

    </div>
  );
};

export default EachStatItem;
