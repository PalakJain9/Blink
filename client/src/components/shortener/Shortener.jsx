import React, { useEffect, useState } from 'react'
import './shortener.css'
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
import { inputUrl, shrinkIt, disableInputArea } from '../../handler/inputTextHandler.js'
import Output from '../output/Output.jsx';

const Shortener = ({setIsCustom, isCustom, setLongUrl, shortCode, setShortenUrlData}) => {
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
        <Output setIsCustom={setIsCustom} isCustom={isCustom} />
      </div>
      }
    </div>
    </>
  )
}

export default Shortener