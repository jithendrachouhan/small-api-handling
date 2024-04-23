import React from 'react'

const ResponseContent = ({response}) => {

const {data, message, statusCode, success } = response;
const { method, origin, headers, url, category, description , statusMessage } = data;

  return (
    <div className='mt-6 p-2 border border-black rounded-lg text-sm sm:text-lg'>
        <h2 className='font-bold text-green-600'>Response Data: </h2>
        {message && <p>{"message: "+ message}</p>}
        {statusCode && <p>{"statusCode: "+ statusCode}</p>}
        {success && <p>{"success: "+ success}</p>}
        {method && <p>{"method: "+ method}</p>}
        {origin && <p>{"origin: "+ origin}</p>}
        {url && <p>{"url: "+ url}</p>}
        {category && <p>{"category: "+ category}</p>}
        {description && <p>{"description: "+ description}</p>}
        {statusMessage && <p>{"statusMessage: "+ statusMessage}</p>}
        {headers && Object.keys(headers).map((key) => {
          return <p>{key + " : " + headers[key]}</p>
        })}
    </div>
  )
}

export default ResponseContent