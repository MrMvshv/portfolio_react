import React from 'react';
import './contact.css';
import fb from '../../assets/facebook-icon.png';
import x from '../../assets/twitter.png';
import yt from '../../assets/youtube.png';
import ig from '../../assets/instagram.png';

const Contact = () => {
  return (
    <section id='contactPage'>
        <div className='contact'>
            <h1 className='contactPageTitle'>Contact me</h1>
            <span className='contactDesc'>Please holla @ me below</span>
            <form className='contactForm'>
                <input className='name' placeholder='Your Name' type='text' />
                <input className='email' placeholder='Your Email' type='email' />
                <textarea name='msg' rows={5} className='msg' placeholder='Your message'></textarea>
                <button type='submit' value='Send' className='submitBtn'>Submit</button>
                <div className='links'>
                    <img src={x} alt='link' className='link' />
                    <img src={yt} alt='link' className='link' />
                    <img src={ig} alt='link' className='link' />
                    <img src={fb} alt='link' className='link' />
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact