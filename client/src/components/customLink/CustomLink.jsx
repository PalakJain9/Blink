import React from 'react'
import { Icon } from '@iconify/react';
import './customLink.css'

const CustomLink = () => {
  return (
    <>
        <button className='btn-black' id='btn-customise' title='customise'><Icon icon="system-uicons:write" width="1.3rem" height="1.3rem" inline={true} /></button>
    </>
  )
}

export default CustomLink