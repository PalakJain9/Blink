import React, { useEffect, useState } from 'react'
import { Icon } from '@iconify/react';
import './output.css'
import { disableInputArea } from '../../handler/inputTextHandler.js'

const Output = ({setIsCustom, isCustom}) => {
    const CopyToClipboard = async() => {
        const text = document.getElementById("output").value
        await navigator.clipboard.writeText(text)
        window.alert("copied to clipboard")
    }
    
    const returnBack = () => {
        setIsCustom(false)
        disableInputArea(false, "", isCustom)
    }
  return (
    <>
    <div className='output-area' id='outputArea'>
        <input className='url-type' id='output' name='shortUrl' type='text' disabled></input>
        {/* input field is disabled by default */}
        <button id='btn-copy' className='btn-black' onClick={() => CopyToClipboard()} title='copy'><Icon icon="material-symbols:content-copy-outline" width="1.3rem" height="1.3rem" inline={true} /></button>
        <button className='btn-black' id='btn-customise' onClick={() => setIsCustom(true)} title='customise'><Icon icon="system-uicons:write" width="1.3rem" height="1.3rem" inline={true} /></button>
        <button id='btn-shorten2' className='btn-black' onClick={() => returnBack()}>shorten another url</button>
    </div>
    </>
  )
}

export default Output