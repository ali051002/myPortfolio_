import React from 'react'
import './ProjectCard.css'

const ProjectCard = ({image, title, description}) => {
  return (
    <div className="project-cards">

        <img src={image} alt="" />
        <h2>{title}</h2>
        <p>{description}</p>

    </div>
  )
}

export default ProjectCard