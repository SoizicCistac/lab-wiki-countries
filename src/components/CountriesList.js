import React from 'react'
import { Link } from 'react-router-dom'

const CountriesList = (props) => {
    const { countries } = props
    return (
        <div className='col-5'>
            <div className="list-group">
            {
                countries.map((country) => {
                    const flag=`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`
                    return <>
                        <Link key={country.name} to={"/"+country.alpha3Code} className="list-group-item list-group-item-action" >
                            <img src={flag} width={20}/>
                            {country.name.common}
                        </Link>
                    </>
                })
            }
            </div>
        </div>
  )
}

export default CountriesList
