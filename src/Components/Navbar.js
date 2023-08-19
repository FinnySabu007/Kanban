import React, { useEffect, useState } from 'react'
import Priority from './Priority';
import State from './State'; 
import Usersection from './Usersection';

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('priority');
  const [selectedFilterorder, setSelectedFilterorder] = useState('title');

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const handleFilterChange = event => {
    setSelectedFilter(event.target.value);
   
  };
  const handleFilterChangeorder = event => {
    setSelectedFilterorder(event.target.value);
   
  };
  return (
    <>
        <div id="nav">
            <button id="navbtn" onClick={toggleVisibility}><i class="ri-equalizer-fill"></i> <span>Display</span></button>
            {isVisible && <div id="navbox">
              <div className="nbone">
              <h5>Grouping By </h5>
              <select name="group" id="group" value={selectedFilter} onChange={handleFilterChange}>
                 <option value="priority">priority</option>
                 <option value="status">status</option>
                 <option value="users">users</option>
              </select>
              </div>
              <div className="nbone">
              <h5>Ordering By</h5>
              <select name="order" id="order" value={selectedFilterorder} onChange={handleFilterChangeorder}>
                 <option value="priority">priority</option>
                 <option value="title">title</option>
              </select>
              </div>
               </div> 
            }
        </div>
        {/* {selectedFilter=="priority" ? (
            <Priority></Priority>
      ) : (
        <Usersection></Usersection>
        
      )} */}

      {selectedFilter === "priority" ? (
    <Priority order = {selectedFilterorder}></Priority>
) 
: selectedFilter === "users" ? (
    <Usersection order = {selectedFilterorder}></Usersection>
) : (
    <State order = {selectedFilterorder}></State>
)

}
    </>
  )
}

