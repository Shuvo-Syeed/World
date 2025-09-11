import React, { useState } from 'react'
import './Country.css'
const Country = ({country,handleVisitedCountries}) => {
  const {name,flags,area,population} = country;
  console.log(country);
  const[visited,setVisited]=useState(false);
  const handleVisited=()=>{
    setVisited(!visited);
  }
  console.log(handleVisitedCountries);
  return (
    <div className={`country  ${visited ? 'visited' : ''}`}>
      <h3>Name:{name.common},{name.official}</h3>
      <img src={flags.png} alt="" />
      <p>Area:{area}</p>
      <p>Population:{population}</p>
      <button onClick={handleVisited}>{visited? "visited":"visit"}</button>
      {visited ? ' yeee i have visited this country' : ' not visited yet' }
    </div>
  )
}

export default Country
