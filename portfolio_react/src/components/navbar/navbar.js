import React, { useState } from "react";
import './navbar.css';
import logo from '../../assets/Mr.png';
import { Link } from 'react-scroll';
import contactImg from '../../assets/contact.png';
import menu from '../../assets/menu.png'

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
            <nav className='navbar'>
                <img src={logo} alt ="logo" className="logo"/>
                <div className="desktopMenu">
                        <Link activeClass='active' to='intro'
                            spy={true} smooth={true} offset={-50} duration={500}
                            className="desktopMenuListItem" onClick={()=>setShowMenu(!showMenu)}>Home</Link>
                        <Link activeClass='active' to='skills'
                            spy={true} smooth={true} offset={-50} duration={400}
                            className="desktopMenuListItem" onClick={()=>setShowMenu(!showMenu)}>About</Link>
                        <Link activeClass='active' to='works'
                            spy={true} smooth={true} offset={-50} duration={300}
                            className="desktopMenuListItem" onClick={()=>setShowMenu(!showMenu)}>Portfolio</Link>
                        <Link activeClass='active' to='intro'
                            spy={true} smooth={true} offset={-50} duration={200} 
                            className="desktopMenuListItem" onClick={()=>setShowMenu(!showMenu)}>Diary</Link>
                </div>
                <button className="desktopMenuBtn" 
                    onClick={() => {
                        document.getElementById('contactPage').scrollIntoView({behavior: 'smooth'});
                    }}>
                    <img src={contactImg} alt="" className="desktopMenuImg" />Contact Me
                </button>

                <img src={menu} alt ="menu" className="mobMenu" onClick={()=>setShowMenu(!showMenu)}/>
                <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
                        <Link activeClass='active' to='intro'
                            spy={true} smooth={true} offset={-50} duration={500}
                            className="ListItem">Home</Link>
                        <Link activeClass='active' to='skills'
                            spy={true} smooth={true} offset={-50} duration={400}
                            className="ListItem">About</Link>
                        <Link activeClass='active' to='works'
                            spy={true} smooth={true} offset={-50} duration={300}
                            className="ListItem">Portfolio</Link>
                        <Link activeClass='active' to='intro'
                            spy={true} smooth={true} offset={-50} duration={200} 
                            className="ListItem">Diary</Link>
                        <Link activeClass='active' to='contact'
                            spy={true} smooth={true} offset={-50} duration={200} 
                            className="ListItem">Contact</Link>
                </div>
            </nav>
            )
}

export default Navbar