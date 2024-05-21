import React from 'react'
import './About.css'
import profile_img from '../../assets/about_profile.jpg'

const About = () => {
  return (
    <div id='about' className="about">
        <div className="about-title">
            <h1>About Me</h1>
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                <p>I am a skilled and enthusiastic MERN Stack Developer with a strong foundation in the technologies that drive modern web applications.</p>
                <p>I possess expertise in both front-end and back-end development, enabling me to craft user-centric and data-driven web experiences.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width: "50%"}} /></div>
                    <div className="about-skill"><p>React Js</p><hr style={{width: "60%"}} /></div>
                    <div className="about-skill"><p>Javascript</p><hr style={{width: "70%"}} /></div>
                    <div className="about-skill"><p>MongoDB</p><hr style={{width: "50%"}} /></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About