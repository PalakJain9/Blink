import React, { useEffect, useState } from 'react'
import './customLink.css'
import { Icon } from '@iconify/react';
import { inputUrl, shrinkIt } from '../../handler/inputTextHandler.js'
import { btnLoaderDisplay } from '../../handler/buttonDisplay.js';
import axios from 'axios';

const CustomLink = ({setIsCustom, setLongUrl, longUrl, setShortCode, setShortenUrlData, shortenUrlData}) => {
  const [customCode, setCustomCode] = useState("")
  
  useEffect(() => {
    setCustomCode(customCode)
    console.log(customCode)
    let updatedObj = shortenUrlData
    updatedObj.shortCode = customCode
    console.log(updatedObj)
    if(customCode){
      btnLoaderDisplay(true, "btn-shorten-2")
      axios.patch(`http://localhost:8000/shorten/${shortenUrlData._id}`, updatedObj)
      .then((res) => {
        console.log(res.data)
        //setShortenUrlData(res.data[0])
        btnLoaderDisplay(false, "btn-shorten-2");
        // disableInputArea(true)

        // setShortenUrlData(res.data[0])
        // setShortCode(res.data[0].shortCode)
      })
      .catch((e) => {
        console.log(e.message)
        btnLoaderDisplay(false, "btn-shorten-2");
      })
    }
  },[customCode])

  return (
    <>
      <div className='custom-container'>
        <div className='customise-area'>
          <p>b.link/</p>
          <input id='url-custom' className='url-type' name='customUrl' type='text' placeholder='Enter code here' onKeyDown={(event) => inputUrl(setCustomCode, event)} required></input>
          <button className='btn-black' id='btn-shorten-2' onClick={() => shrinkIt(setCustomCode, "url-custom")}>generate</button>
          <button className='btn-black' id='btn-loader-2'><Icon icon="eos-icons:bubble-loading" color="white" width="1.3rem" height="1.3rem" inline={true} /></button>
          <button className='btn-black' onClick={() => setIsCustom(false)}>back</button>
        </div>
      </div>
    </>
  )
}

export default CustomLink