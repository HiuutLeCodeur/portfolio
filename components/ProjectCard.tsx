import React from 'react'

type ProjectCardProps = {
    nom: string,
    description: string,
    image: string 
}

const ProjectCard = ({...props}: ProjectCardProps) => {
  return (
    <div className="project-card">
      <img src={props.image} alt={props.nom} />

      <h2>{props.nom}</h2>

      <p>{props.description}</p>
    </div>
  )
}

export default ProjectCard