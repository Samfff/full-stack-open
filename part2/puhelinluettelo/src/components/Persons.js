import React from 'react';
import Number from './Number'

const Persons = ({persons, filter}) => {

  const filteredNumbers = persons.filter(person =>
                            person.name.toLowerCase()
                                        .includes(filter
                                          .toLowerCase()));
  return (

    <div>
      {filteredNumbers.map(person => <Number key={person.name} person={person} />)}
    </div>

  )

}

export default Persons;
