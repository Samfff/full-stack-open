import React from 'react'

const CountryShow = ({country, onCountrySelected}) => {
  const createClickHandler = (country) => {
    return () => onCountrySelected(country)
  }
  return (
    <li>
      {country.name}
      <button onClick={createClickHandler(country)}>show</button>
    </li>
  )
}

export default CountryShow
