import React from 'react'
import './Login.css'
import { loginEndpoint } from '../spotify'

export default function Login() {
  return (
    <div className='login-page'>
        <img src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png'alt='playeer-logo' className='logo'/>
        <a href={loginEndpoint}>
            <div className='login-btn'>LOG IN</div>
            </a>
    </div>
  )
}
