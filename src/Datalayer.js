import React,{useContext,useReducer,createContext} from 'react'

export const DatalayerContext =createContext();

export const DatalayerProvider =({initialState,reducer,children})=>{
    return(
        <DatalayerContext.Provider value={useReducer(reducer,initialState)}>
        {children}
      </DatalayerContext.Provider>
    )
}

export const useDatalayerValue =()=>useContext(DatalayerContext);