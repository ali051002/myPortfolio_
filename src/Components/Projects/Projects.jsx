import React from 'react'
import './Projects.css'
import mechanify from '../../assets/Mechanify.jpg'
import airventory from '../../assets/Airventory.jpg'
import nadra from '../../assets/Nadra.jpg'
import ProjectCards from './ProjectCard'


const Projects = () => {
  return (
    <div id='projects' className="projects">
        <h1>My Projects</h1>
        <ProjectCards
          image = {mechanify}
          title = "Mechanify"
          description = "Online Mechanic app which connects users with nearby mechanics"

        />
        <ProjectCards
          image = {airventory}
          title = "AirVentory"
          description = "A .NET Blazor Web App to manage inventory of Air University"

        />
        <ProjectCards
          image = {nadra}
          title = "Nadra Database Management"
          description = "Console Application for database management using advanced data structures"

        />
        
    </div>
  )
}

export default Projects