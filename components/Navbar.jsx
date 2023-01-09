import React, {useEffect, useState} from 'react';
import {RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { FaGithub } from "react-icons/fa";
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
        <Link href="https://github.com/shabrina12" target="_blank" rel="noopener noreferrer">
          <FaGithub className='icon' color='black' size={32} />
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
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div className={color ? 'navbar-bg navbar' : 'navbar'}>
      
      <div className='navbar-links'>
        <div className='navbar-links_logo'>
          <Link href='/'>
            <h4>Put.</h4>
          </Link>
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