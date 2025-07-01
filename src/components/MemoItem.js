import React from 'react'
import MemoContext from '../context/memos/MemoContext'
export default function MemoItem(props) {
    const { memo } = props;
    return (
        <div className='col-md-3'>

            <div className="card " >
                <div className="card-body ">
                    <h5 className="card-title">{memo.title}</h5>
                    <p className="card-text"> {memo.description}</p>
                    <i className="fa-solid fa-pen-to-square mx-2"></i>
                    <i className="fa-solid fa-trash mx-2"></i>
                </div>
            </div>

        </div>
    )
}
