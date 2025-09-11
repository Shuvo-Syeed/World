
import { useState } from 'react'
import { useEffect } from 'react'
import './Container.css'

import Country from './Country'
const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries,setVisitedCountries]=useState([])
useEffect(()=>{
fetch('https://restcountries.com/v3.1/all?fields=name,flags,area,population')
.then(res=>res.json())
.then(data=>{
  setCountries(data);
  console.log("s",data);
  })
},[]) 

const handleVisitedCountries=(country)=>{
  console.log('add this visited country');
  console.log(country);
}

  return (
    <div>
      <h3>Countries:{countries.length}</h3>
      <div> 
        <h4>Visited countries list:</h4>
      </div>
      <div className='container'>
      {countries.map(country=><Country country={country} handleVisitedCountries={handleVisitedCountries}>
        
      </Country>
      )
      }
      </div>
    </div>
  );
}

export default Countries
