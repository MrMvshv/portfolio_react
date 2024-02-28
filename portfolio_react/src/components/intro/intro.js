import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import { Link } from 'react-scroll';
import btnImg from '../../assets/hireme.png'

const Intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello, </span>
            <span className='introText'>I'm <span className='introName'>Mr Mvshv</span><br /> all-round dope guy</span>
            <p className='introPara'>I am a skilled all rounder ...</p>
            <Link>
                <button className='btn'>
                    <img className='btnImg' src={btnImg} alt='h'></img>Hire Me</button></Link>
        </div>
        <img src={bg} alt='profile pic' className='bg' />
    </section>
  )
}

export default Intro