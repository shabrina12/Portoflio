import React from 'react';
import Image from 'next/image';
import {BiLink} from "react-icons/bi"
import { FaGithub } from "react-icons/fa";

const WorkCard = (props) => {
  return (
    <div className='project-card'>
      <Image className='project-img' src={props.img} alt="img"/>
      <div className='project-detail'>
        <h3 className='project-title'>{props.title}</h3>
        <p>{props.text}</p>
      </div>
      <div className='project-links'>
        <a href={props.view} target="_blank" rel="noopener noreferrer">
          <span><BiLink size={24} />Live site url </span>
        </a>
        <a href={props.source} target="_blank" rel="noopener noreferrer">
          <FaGithub className='project-repo' size={24} />
        </a>
      </div>
    </div>
  )
}

export default WorkCard;