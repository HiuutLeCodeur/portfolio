import ProjectCard from "@/components/ProjectCard";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid-cols-2">
      <header className="flex justify-center">
        <h1 className="text-amber-200 text-4xl">Axel BOULANGER</h1>
      </header>
      <main>
        <ProjectCard
        nom="Jeu Godot"
        description="Jeu de combat 2D développé avec Godot et C#."
        image="/images/godot-project.png"
        />
      </main>
    </div>
  );
}
