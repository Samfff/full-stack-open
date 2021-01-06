import React from 'react'

const Filter = ({ filterInput, handleFilterInputChange }) => {
  return (
    <p>
      filter shown with <input value={filterInput} onChange={handleFilterInputChange} />
    </p>
  )
}

export default Filter
