import React, {Component} from 'react'

import './style.css'

import { Link } from 'react-router-dom'

const Menu = () =>(
   
    <nav className='container-menu'>
        <Link className='action' to='/'>Home</Link>
        <Link className='action' to='/teste1'>Teste1</Link>
        <Link className='action' to='/teste2'>Teste2</Link>
    </nav>
    
)

export default Menu