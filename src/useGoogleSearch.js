import React, { useEffect, useState } from 'react'
import API_KEY from './Keys'

const CONTEXT_KEY ="c0f86a61e810911ef";

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
