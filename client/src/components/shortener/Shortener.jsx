import React, { useEffect, useState } from 'react'
import './shortener.css'
import { Icon } from '@iconify/react';
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import { inputUrl, shrinkIt } from '../../handler/inputTextHandler.js'

const Shortener = ({setIsCustom, isCustom}) => {
  const [longUrl, setLongUrl] = useState({
    url: ""
  })
  const [shortenUrlData, setShortenUrlData] = useState({})
  const [shortCode, setShortCode] = useState("");
  const domain = `b.link/`
  const navigate = useNavigate();

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
      document.getElementById("outputArea").style.display = 'flex'
      document.getElementById("btn_shorten").style.display = 'none'
      document.getElementById("url-type").setAttribute('disabled','disabled');
    }
    else {
      document.getElementById("outputArea").style.display = 'none'
      document.getElementById("btn_shorten").style.display = 'inline-block'
      document.getElementById("url-type").removeAttribute('disabled')
      document.getElementById("url-type").value=''
    }
  }

  useEffect(() => {
    setShortCode(shortCode)
    document.getElementById("output").value = `${domain}${shortCode}`
    console.log(shortCode)
  },[shortCode])

  useEffect(() => {
    setShortenUrlData(shortenUrlData)
    setShortCode(shortenUrlData.shortCode)
    if(shortenUrlData.shortCode) document.getElementById("output").value = `${domain}${shortenUrlData.shortCode}`
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
        disableInputArea(true)
      })
      .catch((e) => {
        console.log(e.message)
        btnLoaderDisplay(false);
      })
    }
  },[longUrl])

  const CopyToClipboard = async() => {
    const text = document.getElementById("output").value
    await navigator.clipboard.writeText(text)
    window.alert("copied to clipboard")
  }

  return (
    <>
    <div className='container'>
      <h2 className='heading'>A tiny URL Shortener for your next <span className='pen-effect'>big project</span> ⚡</h2>
      { isCustom == false && 
      <div className='main-function'>
        <div className='input-area'>
          <input id='url-type' className='url-type' name='longUrl' type='text' placeholder='Enter URL here' onKeyDown={(event) => inputUrl(setLongUrl, event)} required></input>
          <button className='btn-black' id='btn_shorten' onClick={() => shrinkIt(setLongUrl, "url-type")}>shorten</button>
          <button className='btn-black' id='btn-loader'><Icon icon="eos-icons:bubble-loading" color="white" width="1.3rem" height="1.3rem" inline={true} /></button>
        </div>
        <div className='output-area' id='outputArea'>
          <input className='url-type' id='output' name='shortUrl' type='text' disabled></input>
          {/* input field is disabled by default */}
          <button id='btn-copy' className='btn-black' onClick={() => CopyToClipboard()} title='copy'><Icon icon="material-symbols:content-copy-outline" width="1.3rem" height="1.3rem" inline={true} /></button>
          <button className='btn-black' id='btn-customise' onClick={() => setIsCustom(true)} title='customise'><Icon icon="system-uicons:write" width="1.3rem" height="1.3rem" inline={true} /></button>
          <button id='btn-shorten2' className='btn-black' onClick={() => disableInputArea(false)}>shorten another url</button>
        </div>
      </div>
      }
    </div>
    </>
  )
}

export default Shortener