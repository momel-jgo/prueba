import React from 'react'
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';

const Nav = ({onSearch}) => {
    return (
    <nav>
        <div>
        <Link to='/'>LOGOUT</Link>
        <hr/>
        <Link to='about'>About</Link>
        <hr/>
        <Link to='home'>Home</Link>
        <hr/>
        <Link to='/favorites'>Favorites</Link>
        <hr/>
        </div>
        <SearchBar  onSearch={onSearch}/>
    </nav>
    )
}

export default Nav;