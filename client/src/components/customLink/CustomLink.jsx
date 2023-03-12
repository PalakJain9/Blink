import React from 'react'
import './customLink.css'

const CustomLink = ({setIsCustom}) => {
  return (
    <>
      <div className='custom-container'>
        <div className='customise-area'>
          <p>b.link/</p>
          <input className='url-type' type='text' placeholder='Enter code here'></input>
          <button className='btn-black'>generate</button>
          <button className='btn-black' onClick={() => setIsCustom(false)}>go back</button>
        </div>
      </div>
    </>
  )
}

export default CustomLink