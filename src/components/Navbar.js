import React from 'react'
import './Navbar.css'
import {FaCoins} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Link>
      <div className='navbar'>
        <FaCoins className='icon' />
        <h1>Coins <span className='purple'>Search</span>--Jaytee Preview Site</h1>
        </div>  

    </Link>
  )
}

export default Navbar