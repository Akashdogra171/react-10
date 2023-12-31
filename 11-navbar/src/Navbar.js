import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt='logo'></img>
          <button className='nav-toogle'>
            <FaBars/>
          </button>
        </div>
        <div className='links-container show-container'>
          <ul className='links'>
            <li>
              <a href='#'>
                Home
              </a>
            </li>
            <li>
              <a href='#'>
                about
              </a>
            </li>
            <li>
              <a href='#'>
                contact
              </a>
            </li>
            <li>
              <a href='#'>
                price
              </a>
            </li>
          </ul>
        </div>
        <ul className='social-icons'>
          <li>
            <a href='https://www.twitter.com'>
              <FaTwitter/>
            </a>
          </li>
          <li>
            <a href='https://www.twitter.com'>
              <FaTwitter/>
            </a>
          </li>
          <li>
            <a href='https://www.twitter.com'>
              <FaTwitter/>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
