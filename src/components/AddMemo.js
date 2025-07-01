
import React, { useState, useContext } from 'react'
import MemoContext from '../context/memos/MemoContext';
export default function AddMemo() {
    const context =useContext(MemoContext);
    const {addMemo} =context;
    const [memo, setMemo]=useState({title:"", desc:"",tag:""})

    const handleClick=(a)=>{
        a.preventDefault();
        addMemo(memo);
    }
    const onChange=(a)=>{
        setMemo({...memo, [a.target.name]:a.target.value })
    }





  return (
    <div className='my-3'>
    <h1>Add a note!</h1>
    <form>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">title</label>
    <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" onChange={onChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="desc" className="form-label">Description</label>
    <input type="text" className="form-control" id="desc" name="desc" onChange={onChange}/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary" onClick={handleClick}>Submit</button>
</form>


    </div>
  )
}
