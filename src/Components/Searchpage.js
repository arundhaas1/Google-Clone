import React from 'react'
import {useDataLayerValue} from '../Datalayer'
import './Searchpage.css'

function Searchpage() {
    const[{term},dispatch]=useDataLayerValue ();

console.log('term is' ,term)
    return (
        <div className="searchpage">
            <div className="searchpage__header">
                <h1>{term}</h1>
            </div>

            <div className="searchpage__results">

            </div>
        </div>
    )
}

export default Searchpage
