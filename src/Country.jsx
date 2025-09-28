import React, { useState } from 'react'
import CountryDetail from './CountryDetail'
import './Country.css'
const Country = ({country,handleVisitedCountries,handleVisitedFlag}) => {
  const {name,flags,area,population} = country;
  console.log(country);
  const[visited,setVisited]=useState(false);
  const handleVisited=()=>{
    setVisited(!visited);
  }
  console.log(handleVisitedCountries);
  return (
    <div className={`country  ${visited ? 'visited' : ''}`} >
      <h3>Name:{name.common}</h3>
      <img src={flags.png} alt="" />
      {/* <p>Area:{area}</p> */}
      {/* <p>Population:{population}</p> */}
      <div className='button-group'>
      <button onClick={()=>handleVisitedCountries(country)}>Mark Visited</button> <br/>
      <button onClick={handleVisited}>{visited? "visited":"visit"}</button> 
      {visited ? ' yeee i have visited this country' : ' not visited yet' } 
      <button onClick={()=>handleVisitedFlag(country.flags.png)}>Add Flag</button> 
      </div>
      <CountryDetail country={country}
      >
      </CountryDetail>
    </div>
  )
}

export default Country
