import React, { useEffect, useState } from 'react'
import './shortener.css'
import { Icon } from '@iconify/react';
import axios from "axios"

const Shortener = () => {
  const [longUrl, setLongUrl] = useState("")
  useEffect(() => {
    setLongUrl(longUrl)
    if(longUrl){
      axios.post("http://localhost:8000/register", longUrl)
      .then((res) => alert(res.data))
      .catch((e) => alert(e.message))
    }
  },[longUrl])

  const inputUrl = (event) => { 
    //if enter pressed
    if(event.keyCode == 13) { 
      setLongUrl(event.target.value);
      event.preventDefault();
    }
    //else take long url at time of btn click
  }

  const shrinkIt = () => {
    const inputarea = document.getElementById("url-type")
    setLongUrl(inputarea.value)
  }

  return (
    <>
    <div className='container'>
      <h2 className='heading'>A tiny URL Shortener for your next <span className='pen-effect'>big project</span></h2>
      <div className='input-area'>
        <input id='url-type' name='longUrl' type='text' placeholder='Enter URL here' onKeyDown={(event) => inputUrl(event)}></input>
        <button classname='btn-black' id='btn_shorten' onClick={() => shrinkIt()}>shorten</button>
        <button classname='btn-black' id='btn-loader'><Icon icon="eos-icons:bubble-loading" color="white" width="1.5rem" height="1.5rem" inline={true} /></button>
      </div>
    </div>
    </>
  )
}

export default Shortener