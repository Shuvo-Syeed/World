import CountryData from "./CountryData"
const CountryDetail = ({country}) => {
  return (
    <div>
      <h4>Country Detail</h4>
      <hr/>
      <CountryData
        country={country} >
      </CountryData>
    </div>
  )
}

export default CountryDetail
