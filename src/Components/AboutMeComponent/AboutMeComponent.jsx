import React from 'react'
import './AboutMeComponent.css'

const AboutMeComponent = () => {
  return (
    <React.Fragment>
        <section id='about' className='about sec-pad'>
            <div className='about-container'>
                <h2 className='about-heading-container'>
                    <span className='about-heading'>
                        ABOUT ME
                    </span>
                    <span className='about-heading-sub'>
                        Here you will find more information about me, what I do, and my
                        current skills mostly in terms of programming and technology
                    </span>
                </h2>
                <div className='aboutMe'>
                    <div className='aboutMe-container'>
                        <div className='aboutMe-content-container'>
                            <h3 className='aboutMe-title'>
                                Get to know me!
                            </h3>
                            <p className='aboutMe-content'>
                                I'm a <strong>web developer</strong> passionate about building user-friendly and efficient web applications. My experience spans creating dynamic front-ends with <strong>React</strong> and developing back-end systems using Node.js and Express, all supported by MongoDB to ensure seamless data handling.
                            </p>
                            <p className='aboutMe-content'>
                                Beyond development, I enjoy problem-solving in Java, always seeking creative solutions and ways to enhance application performance. Driven by curiosity and a commitment to growth, I’m excited to keep exploring and contributing to projects that make a real impact in the web development world!
                            </p>
                            <p className="aboutMe-content">
                                I'm open to job opportunities where I can contribute, learn, and grow. If you have a suitable opportunity that matches my skills and experience, please feel free to reach out.
                            </p>
                        </div>
                        <a href="./#contact" className="btn btn--med btn--theme dynamicBgClr">Contact</a>
                    </div>
                    <div className='aboutMe-skills-container'>
                        <h3 className='aboutMe-title'>
                            My Skills
                        </h3>
                        <div className='skills-container'>
                            <div className="skills">HTML</div>
                            <div className="skills">CSS</div>
                            <div className="skills">JavaScript</div>
                            <div className="skills">React</div>
                            <div className="skills">NodeJs</div>
                            <div className="skills">ExpressJs</div>
                            <div className="skills">MongoDB</div>
                            <div className="skills">Java</div>
                            <div className="skills">Git</div>
                            <div className="skills">Rest API</div>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </section>
    </React.Fragment>
  )
}

export default AboutMeComponent