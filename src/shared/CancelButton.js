import React from 'react'

const CancelButton = (props) => {
    const {  onClick } = props;

    return (
        <button className="px-4 py-2 bg-gray-200 rounded-lg" onClick={onClick}>Clear</button>
    )
}

export default CancelButton