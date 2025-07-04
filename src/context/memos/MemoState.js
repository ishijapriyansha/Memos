import MemoContext from "./MemoContext";
import { useState } from "react";
const MemoState = (props)=>{
  const host="http://localhost:5000"
    const memosInitial=[]
      const [memos,setMemos]=useState(memosInitial)
      //add a memo
      const addMemo=async (title, description, tag)=>{
        console.log("adding a new memo")
        
        const response=await fetch(`${host}/api/memos/addmemo`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjg2Njk3NzQwYzk3ODQ1NzkyNDRmMDI4In0sImlhdCI6MTc1MTU1MzkwOH0.s33j7of0qBRqQBYHqs-EhPAu6-_wgugb8FNVVlJ3q4U"
        },
        body: JSON.stringify({title, description, tag}),
      });
      const json= response.json();
        const memo={
            "_id": "686697740c9784579244f028",
            "user": "67a1f10b1d0a7635987da851c",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2025-02-06T20:16:22.748Z",
            "__v": 0
          };
        setMemos([...memos, memo]);
      }
      //edit a memo
      const editMemo= async(id, title, description, tag)=>{
        const response=await fetch(`${host}/api/memos/updatememo/${id}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjg2Njk3NzQwYzk3ODQ1NzkyNDRmMDI4In0sImlhdCI6MTc1MTU1MzkwOH0.s33j7of0qBRqQBYHqs-EhPAu6-_wgugb8FNVVlJ3q4U"
        },
        body: JSON.stringify({title, description, tag}),
      });
      const json= response.json();


      for (let i=0;i<memos.length;i++){
        const element=memos[i]
        if(element._id===id){
          element.title=title;
          element.description=description;
          element.tag=tag;
          
        }
      }
      }
      //delete a memo
      const deleteMemo=(id)=>{
        console.log("deleting a memo", id)
        const newMemos=memos.filter((memo)=>memo._id!==id) 
        setMemos(newMemos)
      }


    return(
    <MemoContext.Provider value={{memos,addMemo,editMemo,deleteMemo}}>
        {props.children}
    </MemoContext.Provider>
    )
}
export default MemoState;