import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Search from './components/Search'
import CountryInfo from './components/CountryInfo'
import Countries from './components/Countries'

const App = () => {
    const [filter, setFilter] = useState('')
    const [countries, setCountries] = useState([])
    const api_key = process.env.REACT_APP_API_KEY

    const handleSearchInputChange = (event) => {
        setFilter(event.target.value)
    }

    const selectCountryHandler = (event) => {
        setFilter(event.target.value)
    }

    const countriesFiltered = countries.filter(country =>
      country['name']
        .toUpperCase()
          .includes(filter
            .toUpperCase()))

    useEffect(() => {
        axios
            .get('https://restcountries.eu/rest/v2/all')
            .then(response => {
                setCountries(response.data)
            })
    }, [])



    return (
        <div>
            <Search text={'find countries'} value={filter} handler={handleSearchInputChange} />
            { countriesFiltered.length > 10
                ? <p>Too many matches, specify another filter</p>
                : filter.length === 0 || countriesFiltered.length === 1
                    ? null
                    : <Countries countries={countriesFiltered} selectCountryHandler={selectCountryHandler}/>
            }

            { countriesFiltered.length === 1
                ? <CountryInfo country={countriesFiltered[0]} apikey={api_key} />
                : null
            }
        </div>
    )
}

export default App
