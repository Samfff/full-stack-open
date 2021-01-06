import React, { useState, useEffect } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import axios from 'axios';

const App = () => {

  const [persons, setPersons] = useState([])

  const nameAlreadyExists = (persons, name) => {
    return persons.map(p=>p.name).includes(name)
  }

  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filter, setFilter ] = useState('')

  const handleExistingNameChange = (event) => setNewName(event.target.value)
  const handleExistingNumberChange = (event) => setNewNumber(event.target.value)

  const handleAddName = (event) => {
    event.preventDefault()

    if (nameAlreadyExists(persons, newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }

    const newPerson = {
      name: newName, number: newNumber
    }

    setPersons(persons.concat(newPerson))
    setNewName('')
    setNewNumber('')
  }

  const handleFilterInputChange = (event) => {
    setFilter(event.target.value)
  }

  useEffect(() => {
    axios.get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  },[])


  return (
    <div>

      <h2>Phonebook</h2>
      <Filter filterInput={filter} handleFilterInputChange={handleFilterInputChange}/>

      <h2>add a new</h2>
      <PersonForm handleAddPerson={handleAddName} handleExistingNameChange={handleExistingNameChange} handleExistingNumberChange={handleExistingNumberChange} newName={newName} newNumber={newNumber} />

      <h2>Numbers</h2>
      <Persons persons={persons} filter={filter}/>

    </div>
  )

}

export default App
