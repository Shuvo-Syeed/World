
import { useState } from 'react'
import { useEffect } from 'react'
import './Container.css'


import Country from './Country'
const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries,setVisitedCountries]=useState([])
  const[visitedFlag,setVisitedFlag]=useState([]);
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
  const newVisitedCountries=[...visitedCountries,country];
  setVisitedCountries(newVisitedCountries);
  console.log(visitedCountries);
}
const handleVisitedFlag=(flag)=>{
 const newVisitedFlag=[...visitedFlag,flag];
 setVisitedFlag(newVisitedFlag);
 console.log(visitedFlag);
}
  return (
    <div style={{margin:'20px',textAlign:'center'}}>
      <h3>Countries:{countries.length}</h3>
      <div> 
        <h4>Visited countries list:{visitedCountries.length}</h4>
        <li style={{listStyleType:'none',textAlign:'center',border:'3px solid black',width:'300px',margin:'0 auto',borderRadius:'10px'}}>
          {visitedCountries.map(country=><li key={country.name.common}>{country.name.common}</li>)  }
        </li>
      </div>
      <div className='flag-container'>
        {visitedFlag.map((flag,index)=><img key={index} src={flag} alt="" />)}

      </div>
      <div className='container'>
      {countries.map(country=><Country country={country} handleVisitedCountries={handleVisitedCountries}
      handleVisitedFlag={handleVisitedFlag}>
        
      </Country>
      )
      }
      </div>
    </div>
  );
}

export default Countries
