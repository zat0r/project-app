import React from 'react'

const SearchBox = ({searchbar, SeVa}) => {
    return (
        <div className='pa2'>
            <input type='search' placeholder='Search Robots' onChange={SeVa} />
        </div>
    );
}

export default SearchBox;