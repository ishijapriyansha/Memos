import MemoContext from "./MemoContext";
import { useState } from "react";
const MemoState = (props)=>{
    const memosInitial=[
        {
          "_id": "67a4c9b79607f5e5c6839c81",
          "user": "67a1f10b1d0a7635987da851",
          "title": "title1",
          "description": "description1",
          "tag": "tag1",
          "date": "2025-02-06T14:39:51.076Z",
          "__v": 0
        },
        {
          "_id": "67a4c9d79607f5e5c6839c83",
          "user": "67a1f10b1d0a7635987da851",
          "title": "title2",
          "description": "description2",
          "tag": "tag2",
          "date": "2025-02-06T14:40:23.880Z",
          "__v": 0
        },
        {
          "_id": "67a4cbf19607f5e5c6839c87",
          "user": "67a1f10b1d0a7635987da851",
          "title": "title2",
          "description": "description2",
          "tag": "tag2",
          "date": "2025-02-06T14:49:21.301Z",
          "__v": 0
        },
        {
          "_id": "67a515247f4b00e325e8ca3e",
          "user": "67a1f10b1d0a7635987da851",
          "title": "title2",
          "description": "description2",
          "tag": "tag2",
          "date": "2025-02-06T20:01:40.279Z",
          "__v": 0
        },
        {
          "_id": "67a5189660d82e79401da5db",
          "user": "67a1f10b1d0a7635987da851",
          "title": "titleihsija333",
          "description": "description3ishia",
          "tag": "tag3ihsija",
          "date": "2025-02-06T20:16:22.748Z",
          "__v": 0
        }
      ]
      const [memos,setMemos]=useState(memosInitial)


    return(
    <MemoContext.Provider value={{memos, setMemos}}>
        {props.children}
    </MemoContext.Provider>
    )
}
export default MemoState;