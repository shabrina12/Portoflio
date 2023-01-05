import React from 'react'
import CertificationsData from '../components/CertificationsData'

const certifications = () => {
  return (
    <div className='certiciation-container section__padding'>
        <h1>Certifications</h1>
        {CertificationsData.map((value, index) => {
          return (
            <div className='certification-card' key={index}>
                <div className='certification-name'>
                    <div className='title'>
                        <h2>{value.name}</h2>
                        <p>{value.subName}</p>
                    </div>
                    <div className='date'>
                        <p>{value.date}</p>
                    </div>
                </div>
                <div className='certification-details'>
                    <h3>Description:</h3>
                    <p>{value.desc}</p>
                    <h3>Credential ID:</h3>
                    <p>{value.id}</p>
                    <h3>Url:</h3>
                    <a href={value.url} target="_blank" rel="noreferrer">
                        <p>{value.url}</p>  
                    </a>
                </div>
            </div>
          )
        })}
    </div>
  )
}

export default certifications