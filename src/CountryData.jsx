

const CountryData = ({country}) => {
  const {population,area,name}=country;

  return (
    <div>
      <p><small>Population :{population}</small></p>
      <p><small>Area:{area}</small></p>
      <p><small>Official Name:{name.official}</small></p>
    </div>
  )
}

export default CountryData
