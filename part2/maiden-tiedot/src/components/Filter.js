import React from 'react'

const Filter = ({filter, handleFilterChanged}) => {
  return (
    <p>filter shown with <input value={filter} onChange={handleFilterChanged}/></p>
  )
}

export default Filter
