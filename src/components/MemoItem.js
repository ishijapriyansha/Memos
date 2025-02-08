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
                </div>
            </div>

        </div>
    )
}
