import React, { useEffect  } from 'react'
import MemoContext from '../context/memos/MemoContext'
import { useContext } from 'react'
export default function About() {
    const a =useContext(MemoContext)
    useEffect(()=>{
        a.update();
        // eslint-disable-next-line
    },[])
  return (
    <div>About {a.state.name} and her class {a.state.class}</div>
  )
}
