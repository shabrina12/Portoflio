import React from 'react';
import Image from 'next/image';
import profile from '../public/images/profile.png'

const Header = () => {
  return (
    <header>
      <div className='header'>
        <div className='content'>
          <h1>Nice to Meet You!</h1>
          <h1>I'm <span>Shabrina Putri.</span></h1>
            {/* <p>Based in Surabaya, I'm a computer engineering student at Institut Teknologi Sepuluh Nopember. I develop interest in web development since 2021 and have been passionate about learning & building front-end websites</p>  */}
          <p>A fresh graduate in computer engineering who trying to specialize in Web Development.</p>
          <p>I’m based in Surabaya ⏤ currently seeking internship opportunities in related field.</p>
        </div>
        <div className='profile-container'>
          <div className='profile-card'>
            <Image src={profile} alt='profile-img' />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;
