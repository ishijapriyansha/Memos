import React,{useContext} from 'react'
import MemoContext from '../context/memos/MemoContext'
import MemoItem from './MemoItem';


export default function Memos() {
const context =useContext(MemoContext);
const {memos, setMemos} =context;

  return (
    <>
    <h2>Your Memos</h2>
    <div className='row my-3'>
    {memos.map((memo)=>{
        return <MemoItem memo={memo}/>;  
    })}
    </div>
    </>
  )
}
