import React from 'react'
import Weather from './Weather'

const CountryInfo = ({country, apikey}) => {
    return (
        <>
            <h1>{country.name}</h1>
            <p>capital {country.capital}</p>
            <p>population {country.population}</p>
            <h2>languages</h2>
            <p>
                {country.languages.map((language) =>
                    <p key={language.name}>{language.name}</p>
                )}
            </p>
            <img src={country.flag} alt={'flag'}/>
            <Weather country={country.name} apikey={apikey}/>
        </>
    )
}

export default CountryInfo
