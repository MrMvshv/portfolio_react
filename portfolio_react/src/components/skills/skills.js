import React from 'react';
import './skills.css';
import Uides from '../../assets/ui-design.png';
import Webdes from '../../assets/website-design.png';
import Appdes from '../../assets/app-design.png';

const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>
            What do I do
        </span>
        <span className='skillDesc'>Blow bubbles and fight crime</span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={Uides} alt='ui' className='skillBarImg' />
                <div className='skillBarText'>
                    <h2>Professional software Eng
                    </h2>
                    <p>React front end dev</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={Webdes} alt='web' className='skillBarImg' />
                <div className='skillBarText'>
                    <h2>Fly
                    </h2>
                    <p>Aero engineer and drone enthusiast</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={Appdes} alt='app' className='skillBarImg' />
                <div className='skillBarText'>
                    <h2>Music
                    </h2>
                    <p>Prod by dj shvhmvn</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills