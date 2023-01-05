import React from 'react';
import { Navbar } from '../components';
import WorkDetailCard from '../components/WorkDetailCard';
import projectData from '../components/WorkData';

const Projects = () => {
  return (
    // <>
    // <Navbar />
    <section className='projects-section-wrapper'>
        <div className='project-heading'>
          <h1>PROJECTS</h1>
          <h2 className='subtitle'>All websites i created are responsive</h2>
        </div>
        <div className='project-detail-container'>
          {projectData.map((value, index) => {
            return (
              <WorkDetailCard 
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
    </section>
    // </>
  )
}

export default Projects;