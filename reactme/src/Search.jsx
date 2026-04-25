import React from 'react'

const Search = ({search, setSearch}) => {
  return (
    <div>
        <input 
        type='text'
        placeholder='Buscar productos por titulo...'
        onChange={(e)=>setSearch(e.target.value)}    
        value={search}
        className='border p-2 rounded w-1/2'
        />
    </div>
  )
}

export default Search