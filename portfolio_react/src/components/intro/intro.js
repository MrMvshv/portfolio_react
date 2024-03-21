import React from 'react';
import './intro.css';
import bg from '../../assets/mee.jpg';
//import bg from '../../assets/image.png';
import { Link } from 'react-scroll';
import btnImg from '../../assets/hireme.png'

const Intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello, </span>
            <span className='introText'>I'm <span className='introName'>Mr Mvshv</span><br />
            <a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=400&size=24&pause=1000&random=false&width=435&lines=all+round+dope+guy" alt="Typing SVG" /></a>
            </span>
            <p className='introPara'>
              <a href="https://git.io/typing-svg">
                <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&pause=500&random=True&height=70&width=500&multiline=true&weight=420&size=22&lines=I+am+a+skilled+person+with+practise;f***ing+around+and+finding+out" alt="Typing SVG" />
              </a>
            </p>
            <Link>
                <button className='btn'>
                    <img className='btnImg' src={btnImg} alt='h'></img>Hire Me</button></Link>
        </div>
        <img src={bg} alt='profile pic' className='bg' />
    </section>
  )
}

export default Intro