import React from 'react'

const Search = ({text, value, handler}) => {
    return (
        <div>{text} <input value={value} onChange={handler}/>
        </div>
    )
}

export default Search
