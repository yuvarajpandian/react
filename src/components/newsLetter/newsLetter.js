import React from 'react'
import {AiOutlineSend} from 'react-icons/ai'
import newsletterIllustration from '../../assets/get-newsletter-updates.svg'
import './newsLetter.css'
const newsLetter = () => {
  return (
    <section id='contacts' className="classes.container">
    <div className="classes.wrapper">
      <h4 className="subtitle">Get our latest offers</h4>
      <h2 className="title">Newsletter</h2>
      <div className="inputContainer">
        <input type="text" placeholder='Enter email...'/>
        <AiOutlineSend className="sendIcon"/>
      </div>
      <img src={newsletterIllustration} className="illustration" alt=""/>
    </div>
  </section>
  )
}

export default newsLetter
