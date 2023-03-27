import React, { useEffect, useState } from 'react'
import { Icon } from '@iconify/react';
import './retrieve.css'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Retrieve = () => {
    const [retrieveUrl, setRetrieveUrl] = useState({})
    const param = useParams();
    
  useEffect(() => {
    setRetrieveUrl(retrieveUrl)
    console.log(retrieveUrl)
  },[retrieveUrl])

    axios.get(`/shorten/${param.shortCode}`)
    .then((res) => {
      setRetrieveUrl(res.data)
      window.location.href=retrieveUrl
    })
    .catch((e) => console.log(e.message))
  return (
    <>
        <div className='retreive-container' id='retreive-container'>
            <Icon className='icon-fetch' icon="arcticons:nasa-imagery-fetcher" />
            <p>hang on tight...</p>
        </div>
    </>
  )
}

export default Retrieve