import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
import CartWidget from '../CartWidget.jsx'


function NavBar() {


  return (
    <div className='navBar-container'>
        <ul>
            <li>              
                <Link to='/'>Home</Link>
                <Link to='/categoryman'>Man Category</Link>
                <Link to='/categorywoman'>Woman Category</Link>
                <Link to='/categoryelectronic'>Electronic Category</Link>
            </li>
        </ul>
        <CartWidget />
    </div>
  )
}

export default NavBar