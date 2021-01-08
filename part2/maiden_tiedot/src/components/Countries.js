import React from 'react'

const Countries = ({countries, selectCountryHandler}) => {
    return (
        <>
            {countries.map((country) =>
                <p key={country.name}>{country.name}
                    <button onClick={selectCountryHandler} value={country.name}>show</button>
                </p>
            )}
        </>
    )
}

export default Countries
