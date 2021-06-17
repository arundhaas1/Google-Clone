export const initialState={
    term :null,
}


export const reducer=(state,action)=>{
    console.log(action)

    switch(action.state){
        case "SEARCH_TERM":
        return{
                ...state,
                term:action.term,
        }

        default:
            return state
    }
}