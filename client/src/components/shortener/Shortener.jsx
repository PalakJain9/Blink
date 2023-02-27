import React, { useEffect, useState } from 'react'
import './shortener.css'
import { Icon } from '@iconify/react';
import axios from "axios"

const Shortener = () => {
  const [longUrl, setLongUrl] = useState({
    url: ""
  })
  const [shortenUrlData, setShortenUrlData] = useState({})
  const domain = `b.link`

  const btnLoaderDisplay = (btnLoad) => {
    if(btnLoad){
      //display loader button
      document.getElementById('btn_shorten').style.display = 'none';
      document.getElementById('btn-loader').style.display = 'flex';
    }
    else {
      //display shorten button
      document.getElementById('btn_shorten').style.display = 'flex';
      document.getElementById('btn-loader').style.display = 'none';
    }
  }

  const disableInputArea = (val) => {
    if(val){
      document.getElementById("btn_shorten").style.display = 'none'
      document.getElementById("url-type").disabled = 'true'
    }
  }

  useEffect(() => {
    setShortenUrlData(shortenUrlData)
    console.log(shortenUrlData)
  },[shortenUrlData])

  useEffect(() => {
    setLongUrl(longUrl)
    console.log(longUrl)
    if(longUrl.url){
      btnLoaderDisplay(true)
      axios.post("http://localhost:8000/shorten", longUrl)
      .then((res) => {
        setShortenUrlData(res.data[0])
        btnLoaderDisplay(false);
        const outputArea = document.getElementById("outputArea");
        disableInputArea(true)
        outputArea.style.display = 'flex'
        outputArea.value = `${domain}/${shortenUrlData.shortCode}`
      })
      .catch((e) => {
        console.log(e.response.data)
        btnLoaderDisplay(false);
      })
    }
  },[longUrl])

  const inputUrl = (event) => { 
    //if enter pressed
    if(event.keyCode == 13) { 
      setLongUrl({url: event.target.value});
      event.preventDefault();
    }
    //else take long url at time of btn click
  }

  const shrinkIt = () => {
    const inputarea = document.getElementById("url-type")
    setLongUrl({url: inputarea.value})
  }

  return (
    <>
    <div className='container'>
      <h2 className='heading'>A tiny URL Shortener for your next <span className='pen-effect'>big project</span> ⚡</h2>
      <div className='main-function'>
        <div className='input-area'>
          <input id='url-type' className='url-type' name='longUrl' type='text' placeholder='Enter URL here' onKeyDown={(event) => inputUrl(event)}></input>
          <button className='btn-black' id='btn_shorten' onClick={() => shrinkIt()}>shorten</button>
          <button className='btn-black' id='btn-loader'><Icon icon="eos-icons:bubble-loading" color="white" width="1.5rem" height="1.5rem" inline={true} /></button>
        </div>
        <div className='output-area'>
          <input className='url-type' id='outputArea' type='text' disabled></input>
        </div>
      </div>
    </div>
    </>
  )
}

export default Shortener