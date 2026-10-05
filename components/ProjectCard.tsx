import React from "react";

type ProjectCardProps = {
  nom: string;
  description: string;
  image: string;
  tag: string;
};

const ProjectCard = ({ ...props }: ProjectCardProps) => {
  const tagArray = props.tag.split(" ");
  return (
    <div className="project-card flex flex-raw border-2 border-amber-50 rounded-2xl w-2/3 hover:scale-120 p-4 hover:bg-indigo-400">
      <img
        className="w-30 rounded-2xl mr-5"
        src={props.image}
        alt={props.nom}
      />
      <div className="flex flex-col">
        <h2 className="text-2xl font-bold font-">{props.nom}</h2>

        <p className="font-bold">{props.description}</p>
        <div className=" flex flex-row">
          {tagArray.map((tag) => (
            <div
              key={tag}
              className="rounded-full bg-green-400 px-3 py-1 text-white mr-4 font-bold hover:bg-green-300"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
