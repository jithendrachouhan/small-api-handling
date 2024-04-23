import React from 'react'

const RequestButton = (props) => {

    const { bgColor, text, onClick, isLoading } = props;

    const classData = ` text-sm sm:text-lg px-4 py-2 ${bgColor} rounded-lg`

    return (
        <button disabled={isLoading} className={classData} onClick={onClick}>{isLoading? "Loading....": text}</button>
    )
}

export default RequestButton