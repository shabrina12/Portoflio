import React from 'react';
import Image from 'next/image';
import {BiLink} from "react-icons/bi"
import { FaGithub } from "react-icons/fa";

const WorkDetailCard = (props) => {
  return (
    <div className='project-detail-card'>
        <div className='project-details'>
            <div className='project-desc'>
                <h2 className='title'>{props.title}</h2>
                <p className='tech'>{props.text}</p> 
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            </div>
            <div className='project-url'>
                <a href={props.view} target="_blank" rel="noopener noreferrer">
                    <span>More shots from this project </span>
                </a>
                <a href={props.source} target="_blank" rel="noopener noreferrer">
                    <FaGithub className='project-repo' size={24} />
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