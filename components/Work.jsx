import Link from 'next/link';
import React from 'react';
import WorkCard from './WorkCard';
import projectData from './WorkData';

const Work = () => {
  return (
    <div className='project-wrapper section__padding'>
      <div className='project-heading'>
        <h1>My Latest Work</h1>
        <h2>All Websites I Created Are Responsive</h2>
      </div>
      <div className='project-container'>
        {projectData.map((value, index) => {
          return (
            <WorkCard 
              key={index} 
              img={value.img} 
              title={value.title} 
              text={value.text} 
              view={value.view}
              source={value.source}
            />
          )
        })}
      </div>
      <Link href='/projects'>
        <button className='project-btn' type='button'>See More</button>
      </Link>
    </div>
  )
}

export default Work;