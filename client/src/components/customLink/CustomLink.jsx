import React from 'react'
import { Icon } from '@iconify/react';
import './customLink.css'

const CustomLink = () => {
  return (
    <>
      <div className='custom-container'>
        <div className='customise-area'>
          <p>b.link/</p>
          <input className='url-type' type='text' placeholder='Enter code here'></input>
          <button>generate</button>
        </div>
      </div>
    </>
  )
}

export default CustomLink