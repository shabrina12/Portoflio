import React from 'react';
import WorkCard from '../components/WorkCard';
import projectData from '../components/WorkData';

const Projects = () => {
  return (
    <div className='project-wrapper section__padding'>
      <div className='project-heading'>
        <h1>Projects</h1>
        <h2>All Front End Websites I Created Are Responsive</h2>
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
    </div>
  )
}

export default Projects;