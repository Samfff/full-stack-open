import React from 'react'
import Number from './Number'

const Persons = ({persons, filter, handleDelete}) => {
    const caseinsensitiveFilter = (person) => (
      person.name.toLowerCase().includes(
        filter.toLowerCase()
      )
    )
    return (
      <p>
        {persons
          .filter(caseinsensitiveFilter)
          .map(person => <Number key={person.name} person={person} handleDelete={handleDelete}/>)}
      </p>
    )
  }

export default Persons
