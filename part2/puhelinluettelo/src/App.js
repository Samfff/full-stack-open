import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'
import Error from './components/Error'


const App = () => {

  const [ persons, setPersons] = useState([])
  const [ filter, setFilter ] = useState('')
  const [ message, setMessage ] = useState({content: null})

  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  const newPerson = {
    name: newName,
    number: newNumber
  }

  useEffect(() => {
    personService
      .getAll()
      .then(allPersons =>
        setPersons(allPersons)
        )
    }, [])

  const showNotification = (content, color = 'green') => {
    setMessage({ content, color });
    setTimeout(() => {
      setMessage({ content: null });
    }, 5000);
  };


  const handleNameChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value)
  const handleFilterChange = (event) => setFilter(event.target.value)

  const handleUpdatePerson = (name) => {
    const existingPerson = persons.find(p => p.name === name)
    const updatedPerson = {...existingPerson, number: newNumber}

    personService
     .update(updatedPerson.id, updatedPerson)
     .then(returnedPerson => {
       setPersons(
         persons.map(
           person =>
             person.id !== existingPerson.id ? person: returnedPerson
           )
         )
       showNotification(`Updated ${updatedPerson.name}`)
       })
     .catch(_ => {
       setMessage({content: `Information of ${name} has already been removed from server`, isError: true})
     })
  }

  const handleAddPerson = addedPerson => {
    addedPerson.preventDefault()

    const nameAlreadyExists = (persons, name) => {
      return persons.filter(person=>person.name === name).length
    }

    if (nameAlreadyExists(persons, newName)) {
      const acceptModification = window.confirm(
        `${newName} is already added to phonebook, replace the old number with a new one?`
        )

      if (acceptModification) {
        handleUpdatePerson(newName)
      }

    } else {
        personService.create(newPerson)
        .then(newPerson => {
            setPersons(persons.concat(newPerson))
            showNotification(`Added ${newPerson.name}`)
        })
        setNewName('')
        setNewNumber('')
    }
  }

  const handleDelete = deletedPerson => {
    const accepted = window.confirm(`Delete ${deletedPerson.name}?`)
    if (accepted) {
      personService
        .remove(deletedPerson.id)
        .then(() => {
          setPersons(persons.filter(person => person.id !== deletedPerson.id))
          showNotification(`Deleted ${deletedPerson.name}`)
        })
      }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Error message={message} />
      <Filter filter={filter} onFilterChange={handleFilterChange}/>
      <h2>add a new</h2>
      <PersonForm handleAddPerson={handleAddPerson} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} newName={newName} newNumber={newNumber}/>
      <h2>Numbers</h2>
      <Persons persons={persons} filter={filter} handleDelete={handleDelete}/>
    </div>
  )

}

export default App
