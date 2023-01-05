import React from 'react';
import { FaGithub } from "react-icons/fa";
import {SiVisualstudiocode} from "react-icons/si"
import Link from 'next/link';

const Skill = () => {
  return (
    <div className='skill section__padding'>
      <div className='skill-title'>
        <h1>My Tech Stack</h1>
        <p>Technologies i've been working with recently</p>
      </div>
      {/* <div className='skill-line'></div> */}

      <div className='skill-content'>
        <a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg" width="70" height="70" alt="HTML5" /></a>
        <a href="https://www.w3.org/TR/CSS/#css" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg" width="70" height="70"  alt="CSS3" /></a>
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg" width="70" height="70"  alt="JavaScript" /></a>
        <a href="https://getbootstrap.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg" width="70" height="70" alt="Bootstrap" /></a>
        <a href="https://reactjs.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg" width="70" height="70" alt="React" /></a>
        <a href="https://nextjs.org/docs" target="_blank" rel="noreferrer"><img src="https://cdn.cdnlogo.com/logos/n/80/next-js.svg" width="70" height="70" alt="NextJs" /></a>
        <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg" width="70" height="70" alt="NodeJS" /></a>
        {/* <a href="https://expressjs.com/" target="_blank" rel="noreferrer"><img src="https://www.nextontop.com/assets/img/services/web/expressjs.svg" width="110" height="110" alt="Express" /></a> */}
        <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb-colored.svg" width="70" height="70" alt="MongoDB" /></a>
        <a href="https://www.mysql.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mysql-colored.svg" width="70" height="70" alt="MySQL" /></a>
        <a href="https://www.mysql.com/" target="_blank" rel="noreferrer">
          <SiVisualstudiocode size={70} color='#0078d7' />
        </a>
        {/* <Link href="https://github.com/shabrina12">
          <FaGithub color='black' size={70} />
        </Link> */}
      </div>
    </div>
  )
}
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg" width="36" height="36" alt="JavaScript" /></a>
export default Skill