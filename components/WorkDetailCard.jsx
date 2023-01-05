import React from 'react';
import Image from 'next/image';
import { FaGithub } from "react-icons/fa";
import {BsArrowUpRight} from 'react-icons/bs'

const WorkDetailCard = (props) => {
  return (
    <div className='project-detail-card'>
        <div className='project-details'>
            <div className='project-desc'>
                <h2 className='title'>{props.title}</h2>
                <p className='text'>{props.text}</p> 
                <p className='desc'>{props.desc}</p>
            </div>
            <div className='project-url'>
                <a href={props.view} target="_blank" rel="noopener noreferrer">
                    <span>More shots from this project <BsArrowUpRight size={15} /></span>
                </a>
                <a href={props.source} target="_blank" rel="noopener noreferrer">
                    <FaGithub className='project-repo' size={28} />
                </a>
            </div>
        </div>
        <div className='project-image'>
            <Image src={props.img} alt="img"/>
        </div>
    </div>
  )
}

export default WorkDetailCard;