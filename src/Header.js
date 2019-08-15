import React from 'react'

const Header = ({ word }) =>{
    return (
        <header className='header'>
            <h1> Abs News </h1>
            <span>Search News</span>
            <input type='text' onChange={ word }/>
        </header>
      )
}
export default Header;
