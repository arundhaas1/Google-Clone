import React from 'react'
import {useDataLayerValue} from '../Datalayer'
import useGoogleSearch from '../useGoogleSearch';
import './Searchpage.css'
import {Link} from 'react-router-dom'
import Search from './Search '

function Searchpage() {
    const[{term},dispatch]=useDataLayerValue ();
    const {data} =useGoogleSearch(term);

console.log('data is', data)
    return (
        <div className="searchpage">
            <div className="searchpage__header">
                <Link to="/">
                    <img className="search__logo" alt="" src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"/>
                </Link>

                <div className="search__headerbody">
                    <Search hide/>
                </div>
            </div>

            <div className="searchpage__results">

            </div>
        </div>
    )
}

export default Searchpage
