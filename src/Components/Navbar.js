import React, { useEffect, useState } from 'react'
import Priority from './Priority';
import State from './State';

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('priority');

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const handleFilterChange = event => {
    setSelectedFilter(event.target.value);
  };
  return (
    <>
        <div id="nav">
            <button id="navbtn" onClick={toggleVisibility}>Display</button>
            {isVisible && <div id="navbox">
              <div className="nbone">
              <h5>Grouping By </h5>
              <select name="group" id="group" value={selectedFilter} onChange={handleFilterChange}>
                 <option value="priority">priority</option>
                 <option value="status">status</option>
              </select>
              </div>
              <div className="nbone">
              <h5>Ordering</h5>
              <select name="group" id="order">
                 <option value="priority">priority</option>
                 <option value="title">title</option>
              </select>
              </div>
               </div> 
            }
        </div>
        {selectedFilter=="priority" ? (
            <Priority></Priority>
      ) : (
        <State></State>
      )}
    </>
  )
}
