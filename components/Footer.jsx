import Link from 'next/link';
import React from 'react';
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer section__padding'>
      {/* <div className='footer-container'> */}
        <p>Contact me at : shabbrina5@gmail.com</p>
        <div className='footer-icons'>
          <Link href="https://www.instagram.com/shabputri_/">
            <FaInstagram className='icon' size={42} />
          </Link>
          <Link href="https://www.linkedin.com/in/shabrina-putri-4705491a5/">
            <FaLinkedin className='icon' size={42} />
          </Link>
          <Link href="https://github.com/shabrina12">
            <FaGithub className='icon' size={42} />
          </Link>
        </div>
        {/* </div> */}
        <div className="custom-shape-divider-bottom-1672721337">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
            </svg>
        </div>
      {/* </div> */}
    </div>
  )
}

export default Footer;