import React from 'react'
import './ContactUs.css'
import Contact from '../Assets/Contact.png'


const ContactUs = () => {
  return (
    <div className='containerContactUs'>

      <img src={Contact} alt="" id='contactimg' />
      <div className='contactlinks'>
        <a href="www.rosstech.com">Official Website</a>

        <a href="https://www.google.com/">Google</a>

        <a href="https://www.instagram.com/rossbusinesstech/">Instgram</a>

        <a href="https://x.com/?lang=en">Twitter</a>

      </div>
      
    </div>
  )
}

export default ContactUs