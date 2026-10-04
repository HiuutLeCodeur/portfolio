import React from "react";

type ProjectCardProps = {
  nom: string;
  description: string;
  image: string;
};

const ProjectCard = ({ ...props }: ProjectCardProps) => {
  return (
    <div className="project-card flex flex-raw border-2 border-amber-50 rounded-2xl w-2/3 hover:scale-120 p-4">
      <img className="w-30 rounded-2xl " src={props.image} alt={props.nom} />
      <div className="flex flex-col">
        <h2>{props.nom}</h2>

        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
