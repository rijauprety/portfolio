import React from 'react'
import "./AboutPage.css";
import image from "../../assets/images/profile.jpg"
import Navbar from "../../component/navbar/Navbar"
const AboutPage = () => {
    return (
        <div className='aboutPageContainer'>
            <Navbar/>
            <div className='aboutContents'>
                <div className='left'>
                    <div className='imageContainer'>
                        <img className='image' src={image} alt='test' />
                    </div>
                </div>
                <div className='right'>
                    <div className='rightHeader'>
                        <h1>Hello,</h1>
                        <h2>a bit about me:</h2>
                    </div>
                    <div className='info'>
                        <div className='infoCol red'>My Resume</div>
                        <div className='infoCol blue'>My Work</div>
                        <div className='infoCol green'>My Skills</div>
                    </div>
                    <div className='description'>
                        <p>
                            I am a passionate UI/UX designer specializing in creating intuitive and visually appealing digital experiences. With a keen eye for detail and a deep understanding of user-centered design principles, I craft seamless interfaces that elevate user interaction and satisfaction. Proficient in Figma, I enjoy translating ideas into interactive prototypes and polished designs that not only meet but exceed client expectations. My goal is to blend creativity with functionality, ensuring every design decision enhances the user journey and achieves business goals effectively.
                         </p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default AboutPage
