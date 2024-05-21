import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.jpg'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" class="circular-frame" />
      <h1><span>I'm Ali Sufyan,</span> MERN Stack developer</h1>
      <p>Skilled MERN stack developer with expertise in building web applications using MongoDB, Express.js, React, and Node.js.</p>
     
    </div>
  )
}

export default Hero