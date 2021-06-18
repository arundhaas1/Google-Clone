import React, { useEffect, useState } from 'react'
import API_KEY from './Keys'

const CONTEXT_KEY ="2455ef561dde8b064";

const useGoogleSearch=(term)=> {
    const[data,setData]=useState();

    
useEffect(()=>{
    const FetchData=async()=>{
       fetch( `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`)
       .then(response=>response.json())
       .then(result=>{
           setData(result)
       })
    }
    FetchData();

},[term])

return{data}

}

export default useGoogleSearch
