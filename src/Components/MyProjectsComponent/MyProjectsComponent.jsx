import React from 'react'
import './MyProjectsComponent.css'
import project1 from '../../assets/Images/cloudnest-project.jpg'
import project2 from '../../assets/Images/kitchencollab-project.jpg'
const MyProjectsComponent = () => {
  return (
    <React.Fragment>
        <section id='projects' className='projects sec-pad'>
          <div className='project-container'>
            <h2 className='project-heading-container'>
              <span className='project-heading'>PROJECTS</span>
              <span className='project-heading-sub'>Here are some projects I've created, each with a live link for direct access. Take a look to see them in action!</span>
            </h2>
            <div className='project-content-container'>
              <div className='projects__row '>
                <div className="projects__row-img-cont">
                  <img src={project1} className="projects__row-img" loading="lazy"/>
                </div>
                <div className="projects__row-content">
                  <h3 className="projects__row-content-title">CLOUDNEST</h3>
                  <p className="projects__row-content-desc">
                    Developed a scalable cloud storage platform using 
                    the MERN stack integrated with AWS. 
                    The platform allows users to upload, organize, 
                    and securely access files, with features for file 
                    sharing and real-time updates. It’s designed to provide a 
                    seamless and responsive user experience across devices
                  </p>
                  <a className="btn btn--med btn--theme dynamicBgClr" href="https://cloudnest-fe.vercel.app/" target="_blank">Live Link</a>
                </div>
              </div>
              <div className='projects__row '>
                <div className="projects__row-img-cont">
                  <img src={project2} className="projects__row-img" loading="lazy"/>
                </div>
                <div className="projects__row-content">
                  <h3 className="projects__row-content-title">KITCHENCOLLAB</h3>
                  <p className="projects__row-content-desc">
                    A recipe-sharing platform where users can explore 
                    and add recipes, view detailed nutrition information, 
                    and share their culinary creations. Built for food 
                    enthusiasts to easily discover and contribute recipes.
                  </p>
                  <a className="btn btn--med btn--theme dynamicBgClr" href="https://kitchen-collab-fe.vercel.app/" target="_blank">Live Link</a>
                </div>
              </div>
            </div>
          </div>
        </section>
    </React.Fragment>
  )
}

export default MyProjectsComponent