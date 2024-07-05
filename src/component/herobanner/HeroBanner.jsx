import React from 'react'
import './HeroBanner.css'
import Navbar from '../navbar/Navbar'
const HeroBanner = () => {
  return (
    <div className="container">
      <Navbar/>
      <div className="text">
        <h1 className="header">Hi, <br/>I am Rija.</h1>
        <p className="dog">
          I am a BIM undergraduate specializing in UI/UX design. Passionate about blending technology with user experience, I thrive on creating intuitive digital solutions. With a keen eye for detail and a commitment to innovation, I'm excited to shape user-centric designs that redefine digital experiences.
        </p>
      </div>
    </div>
  )
}

export default HeroBanner
