import React from 'react'
import ExperiencesData from '../data/ExperiencesData'

const experiences = () => {
  return (
    <div className='certiciation-container'>
        <h1>Work Experiences</h1>
        {ExperiencesData.map((value, index) => {
          return (
            <div className='certification-card' key={index}>
                <div className='certification-name'>
                    <div className='title'>
                        <h2>{value.position} | {value.company}</h2>
                        {/* <h3>{value.company}</h3> */}
                    </div>
                    <div className='date'>
                        <p>{value.date}</p>
                    </div>
                </div>
                <div className='certification-details'>
                    <h3>Job Description:</h3>
                    <p>{value.desc[0]}</p>
                    <p>{value.desc[1]}</p>
                    <p>{value.desc[2]}</p>
                    <p>{value.desc[3]}</p>
                </div>

                <div className='certification-details'>
                    <h3>Skills:</h3>
                    <p>{value.skills}</p>
                </div>                
            </div>
          )
        })}
    </div>
  )
}

export default experiences