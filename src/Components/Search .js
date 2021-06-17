import React,{useState} from 'react'
import './Search.css'
import MicIcon from '@material-ui/icons/Mic';
import {useDataLayerValue} from '../Datalayer';
import { Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import {useHistory} from 'react-router-dom'

function Search ({hide=false}) {
    const[{term},dispatch]=useDataLayerValue ();

    const[input,setInput]=useState("")
    const History=useHistory()

        const Search=(e)=>{
            e.preventDefault();

            dispatch({
                type:  "SET_TERM",
                term:input,
            })

            History.push("/search")
        }

    return (
        <form className="search">
            <div className="search__input">
                <SearchIcon  className="search__icon"/>
                <input value={input} onChange={e=>setInput(e.target.value)}/>
                <MicIcon />
            </div>

            {!hide ? <div className="search__buttons">
                <Button type="submit" onClick={Search} variant="outlined">Google Search</Button>
                <Button variant="outlined">I'm Feeling Lucky</Button>
            </div>
            :
            <div className="search__buttons">
                <Button className="hide" type="submit" onClick={Search} variant="outlined">Google Search</Button>
                <Button className="hide" variant="outlined">I'm Feeling Lucky</Button>
            </div>
            }
        </form>
    )
}

export default Search 
