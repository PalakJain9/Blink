import React, { useEffect, useState } from 'react'
import './customLink.css'
import { Icon } from '@iconify/react';
import { inputUrl, shrinkIt, disableInputArea } from '../../handler/inputTextHandler.js'
import { btnLoaderDisplay } from '../../handler/buttonDisplay.js';
import axios from 'axios';
import Output from '../output/Output.jsx';

const CustomLink = ({setIsCustom, isCustom, setLongUrl, longUrl, setShortCode, setShortenUrlData, shortenUrlData, domain}) => {
  const [customCode, setCustomCode] = useState("")
  
  useEffect(() => {
    setCustomCode(customCode)
    console.log(customCode)
    let updatedObj = shortenUrlData
    updatedObj.shortCode = customCode
    console.log(updatedObj)
    if(customCode){
      if(customCode == shortenUrlData.shortCode){
        //same code entered
        window.alert("updated successfully")
        disableInputArea(true, "customUrl", isCustom)
        window.document.getElementById("output").value = `${domain}${customCode}`
      }
      else {
        btnLoaderDisplay(true, "btn-shorten-2")
        axios.patch(`/shorten/${shortenUrlData._id}`, updatedObj)
        .then((res) => {
          //setShortenUrlData(res.data[0])
          btnLoaderDisplay(false, "btn-shorten-2");
          window.alert(res.data)
          disableInputArea(true, "customUrl", isCustom)
          window.document.getElementById("output").value = `${domain}${customCode}`
        })
        .catch((e) => {
          console.log(e.message)
          btnLoaderDisplay(false, "btn-shorten-2")
        })
      } 
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
        <Output setIsCustom={setIsCustom} isCustom={isCustom} />
      </div>
    </>
  )
}

export default CustomLink