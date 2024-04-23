import React from 'react'
import logo from '../assets/logo.png'

const Header = () => {
  return (
    <div className='px-8 py-4 shadow-lg bg-blue-200 w-[100%]]'>
        <img className='h-8 sm:h-14' src={logo} alt='logo'/>
    </div>
  )
}

export default Header