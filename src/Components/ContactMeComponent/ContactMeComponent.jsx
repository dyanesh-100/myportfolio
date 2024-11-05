import React from 'react'
import './ContactMeComponent.css'
const ContactMeComponent = () => {
  return (
    <React.Fragment>
        <section id='contact' className='contact sec-pad'>
        <div className="project-container">
        <h2 className="project-heading-container">
          <span className="project-heading">Contact</span>
          <span className="project-heading-sub">
            You're welcome to reach out by filling out the form below, and I’ll be glad to respond at the earliest opportunity. Looking forward to connecting!
          </span>
        </h2>
        <div className="contact__form-container">
          <form action="#" className="contact__form"><input type="hidden" name="form-name" value="form 1"/>
            <div className="contact__form-field">
              <label className="contact__form-label" >Name</label>
              <input required="" placeholder="Enter Your Name" type="text" className="contact__form-input" name="name" id="name"/>
            </div>
            <div className="contact__form-field">
              <label className="contact__form-label" >Email</label>
              <input required="" placeholder="Enter Your Email" type="email" className="contact__form-input" name="email" id="email"/>
            </div>
            <div className="contact__form-field">
              <label className="contact__form-label" >Message</label>
              <textarea required="" cols="30" rows="10" className="contact__form-input" placeholder="Enter Your Message" name="message" id="message"></textarea>
            </div>
            <button type="submit" className="btn btn--theme contact__btn">
              Submit
            </button>
          </form>
        </div>
      </div>
        </section>
    </React.Fragment>
  )
}

export default ContactMeComponent