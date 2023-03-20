import React, { useEffect, useState } from 'react'
import './customLink.css'
import { Icon } from '@iconify/react';
import { inputUrl, shrinkIt } from '../../handler/inputTextHandler.js'
import axios from 'axios';

const CustomLink = ({setIsCustom}) => {
  const [customCode, setCustomCode] = useState("")
  useEffect(() => {
    setCustomCode(customCode)
    console.log(customCode)
  },[customCode])

  const customiseLink = () => {
    //btnLoaderDisplay(true)
    axios.patch("http://localhost:8000/shorten", longUrl)
    .then((res) => {
      console.log(res.data)
      //setShortenUrlData(res.data[0])
      //btnLoaderDisplay(false);
      //disableInputArea(true)
    })
    .catch((e) => {
      console.log(e.message)
      //btnLoaderDisplay(false);
    })
  }

  return (
    <>
      <div className='custom-container'>
        <div className='customise-area'>
          <p>b.link/</p>
          <input id='url-custom' className='url-type' type='text' placeholder='Enter code here' onKeyDown={(event) => inputUrl(setCustomCode, event)} required></input>
          <button className='btn-black' onClick={() => customiseLink()}>generate</button>
          <button className='btn-black' id='btn-loader'><Icon icon="eos-icons:bubble-loading" color="white" width="1.3rem" height="1.3rem" inline={true} /></button>
          <button className='btn-black' onClick={() => setIsCustom(false)}>go back</button>
        </div>
      </div>
    </>
  )
}

export default CustomLink