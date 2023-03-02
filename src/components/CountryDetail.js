import React from 'react'
import {useParams} from 'react-router-dom'


const CountryDetail = (props) => {
    const { countries } = props
    const { alpha3Code } = useParams()
    const url = "https://ih-countries-api.herokuapp.com/countries"

    const detailCountry = countries.filter((country) => country.alpha3Code === alpha3Code)
    console.log("detail country", detailCountry)

    const flag=`https://flagpedia.net/data/flags/icon/72x54/${detailCountry[0].alpha2Code.toLowerCase()}.png`

  return (
    <div className="col-7">
        <img src={flag} alt="" />
      <h1>{detailCountry[0].name.common}</h1>
        <p>Capital: {detailCountry[0].capital}</p>
        <p>Area : {detailCountry[0].area} km <sup>2</sup></p>
        <p>Borders</p>
        <ul>
            {detailCountry[0].borders.map}
        </ul>
    </div>
  )
}

export default CountryDetail
