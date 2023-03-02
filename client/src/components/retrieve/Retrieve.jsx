import React from 'react'
import { Icon } from '@iconify/react';
import './retrieve.css'

const Retrieve = () => {
  return (
    <>
        <div className='retreive-container'>
            <Icon className='icon-fetch' icon="arcticons:nasa-imagery-fetcher" />
            <p>hang on tight...</p>
        </div>
    </>
  )
}

export default Retrieve