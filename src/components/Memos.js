import React,{useContext} from 'react'
import MemoContext from '../context/memos/MemoContext'
import MemoItem from './MemoItem';
import AddMemo from './AddMemo';


export default function Memos() {
    const context =useContext(MemoContext);
    const {memos, addMemo} =context;

  return (
    <>
    <AddMemo/>
    <h2>Your Memos</h2>
    <div className='row my-3'>
    {memos.map((memo)=>{
        return <MemoItem key= {memo._id}memo={memo}/>;  
    })}
    </div>
    </>
  )
}
