import React, {useEffect, useState} from 'react';
import {RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from 'next/link';

// BEM -> Block Element Modifier 
const Menu = () => (
  <>
    <ul>
      <li>
        <Link href='/certifications'>
          Certifications
        </Link>
      </li>
      <li>
        <Link href='/projects'>
          Projects
        </Link>
      </li>
      <li>
        <Link href="https://github.com/shabrina12">
          <FaGithub className='icon' size={42} />
        </Link>
      </li>
    </ul> 
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [color, setColor] = useState(false);

  const changeColor =() => {
    if(window.scrollY >= 100){
      setColor(true);
    } else {
      setColor(false);
    }
  };

  useEffect(() => {
    // window is accessible here.
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div className={color ? 'navbar-bg navbar section__padding' : 'navbar section__padding'}>
      
      <div className='navbar-links'>
        <div className='navbar-links_logo'>
          <h4>Portfolio</h4>
        </div>
        <div className='navbar-links_social'>
          <Menu />
        </div>
      </div>

      <div className='navbar-menu'>
        {toggleMenu 
        ? <RiCloseLine  color="white" size={27} onClick={() => setToggleMenu(false)} /> 
        : <RiMenu3Line  color="white" size={27} onClick={() => setToggleMenu(true)} /> 
        }
        {toggleMenu && (
          <div className='navbar-menu_container scale-up-center'>
            <Menu />
          </div>
        )}
      </div>

    </div>
  )
}

export default Navbar;