import MemoContext from "./MemoContext";
import { useState } from "react";
const MemoState = (props)=>{
    const s1 ={
        "name":"ishija",
        "class":"5b"
    }
const [ state, setState]=useState(s1);

const update=()=>{
    setTimeout(() => {
        setState(
            {"name" : "Larry",
             "class": "10b"
            }
        )
    }, 1000);
}
    return(
    <MemoContext.Provider value={{state, update}}>
        {props.children}
    </MemoContext.Provider>
    )
}
export default MemoState;