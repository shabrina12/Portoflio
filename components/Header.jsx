import React from 'react';
import Link from 'next/link';
// import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
        <div className='mask-dark-overlay'>
            <img className='header-img' src='https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80' alt='header' />
        </div>
        <div className='content section__padding'>
            <h1>Nice to Meet You!</h1>
            <h1>I'm Shabrina.</h1>
            <p>Based in Surabaya, I'm a computer engineering student at Institut Teknologi Sepuluh Nopember. I develop interest in web development since 2021 and have been passionate about learning & building front-end websites</p> 
            {/* <div>
                <Link to="/projects" className='btn'>Projects</Link>
                <Link to="/about" className='btn btn-light'>Contact</Link>
            </div> */}
        </div>
    </header>
  )
}

export default Header;
