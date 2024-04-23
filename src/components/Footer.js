import React from 'react'

const Footer = () => {
  return (
    <div className=' items-center bg-blue-200  justify-between p-10 sm:flex font-bold'>
      <h3 class >Email: <span className='font-normal'>Jithendratechwork@gmail.com</span></h3>
      <h3 class >Phone: <span className='font-normal'>+91-9164049550</span></h3>
      <a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/jithendra-kumar-k-77159b251'><h3 class >linkedin: <span className='font-normal'>JithendraKumarK(click here)</span></h3></a>
      <a target='_blank' rel="noreferrer" href='https://github.com/jithendrachouhan'><h3 class >GitHub: <span className='font-normal'>JithendraKumarK(click here)</span></h3></a>
    </div>
  )
}

export default Footer