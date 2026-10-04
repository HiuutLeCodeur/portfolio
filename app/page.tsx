import NetworkLink from "@/components/NetworkLink";
import ProjectCard from "@/components/ProjectCard";
import SidebarButon from "@/components/SidebarButon";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" gap-6 bg-indigo-950 h-full">
      <header className="flex justify-center p-5 bg-gray-900 mb-6">
        <h1 className="text-amber-200 text-4xl">Axel BOULANGER</h1>
        <SidebarButon icon="panel-left.svg" />
        <NetworkLink
          logo="linkedin.svg"
          link="https://www.linkedin.com/in/axel-boulanger-5058b33a5/?isSelfProfile=true"
        />
        <NetworkLink
          logo="insta.svg"
          link="https://www.instagram.com/axelblg?stkn=MTJnMjBwNmp3M2hvcA=="
        />
      </header>
      <main className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_3fr] h-full ">
        <div
          id="sidebar"
          className="border-2 border-amber-50 h-full bg-slate-950 rounded-2xl"
        ></div>
        <div id="projects" className="flex flex-col  gap-4 items-center">
          <p className="max-w-2/3">
            {" "}
            Je suis Axel, étudiant en informatique à la recherche d’un stage ou
            d’une alternance dans le développement d’applications et le web.
            <br />
            Au cours de ma formation, j’ai travaillé sur des projets mêlant
            développement, bases de données et conception d’applications.
            <br /> Je m’intéresse aussi à la cybersécurité et au développement
            de jeux vidéo, des domaines que j’explore en parallèle à travers mes
            projets personnels.
            <br />
            J’aime découvrir de nouvelles technologies, comprendre leur
            fonctionnement et construire des projets concrets pour
            progresser.{" "}
          </p>
          <ProjectCard
            nom="Jeu Godot"
            description="Jeu de combat 2D développé avec Godot et C#."
            image="gd.jpeg"
          />
          <ProjectCard
            nom="Jeu Godot"
            description="Jeu de combat 2D développé avec Godot et C#."
            image="gd.jpeg"
          />
          <ProjectCard
            nom="Jeu Godot"
            description="Jeu de combat 2D développé avec Godot et C#."
            image="gd.jpeg"
          />
          <ProjectCard
            nom="Jeu Godot"
            description="Jeu de combat 2D développé avec Godot et C#."
            image="gd.jpeg"
          />
          <ProjectCard
            nom="Jeu Godot"
            description="Jeu de combat 2D développé avec Godot et C#."
            image="gd.jpeg"
          />
          <ProjectCard
            nom="Jeu Godot"
            description="Jeu de combat 2D développé avec Godot et C#."
            image="gd.jpeg"
          />
          <ProjectCard
            nom="Jeu Godot"
            description="Jeu de combat 2D développé avec Godot et C#."
            image="gd.jpeg"
          />
          <ProjectCard
            nom="Jeu Godot"
            description="Jeu de combat 2D développé avec Godot et C#."
            image="gd.jpeg"
          />
        </div>
      </main>
    </div>
  );
}
