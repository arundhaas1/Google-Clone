import React from 'react'
import './Search.css'
import MicIcon from '@material-ui/icons/Mic';
import { Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

function Search () {
    return (
        <div className="search">
            <div className="search__input">
                <SearchIcon  className="search__icon"/>
                <input />
                <MicIcon />
            </div>

            <div className="search__buttons">
                <Button variant="outlined">Google Search</Button>
                <Button variant="outlined">I'm Feeling Lucky</Button>
            </div>
        </div>
    )
}

export default Search 
