"use client";
import Farlinhares from "@/public/assets/farlinhares.png"
import Sidcom from "@/public/assets/sidcom.png"
import { ProjectCard } from './projectCard';
import axios from "axios";
import { useEffect, useState } from "react";

interface ProjetosProps {
  name: string,
  description: string,
  thumb_url: string,
  link: string,
  tecnologies: string[]
}

export const ProjectsSection = () => {
  const [projects, setProjects] = useState<ProjetosProps[]>([])

  useEffect(() => {
    getProjects();
  }, [])

  const getProjects = async () => {
    try {
      const response = await axios.get("https://projects-api-w9p1.onrender.com/projects");
      if (!response) {
        return
      }
      setProjects(response.data)
      console.log(response)
    } catch {
      console.log("Erro ao buscar projetos")
    }
  }
  return (
    <div id="projects-section" className="sw-full h-auto flex flex-col justify-start pt-[100px] 2xl:pt-[200px] pb-[100px] items-start font-jersey font-lg text-[#C2C2C2]">
      <div className="mb-10 font-sm text-[2rem]">PROJETOS</div>
      <div className="w-full flex flex-wrap justify-between gap-y-10">
        {projects.length === 0 ? (
          <>
            <ProjectCard src={Farlinhares} ProjectInfo={{ tecnologies: ["next", "flask","postgresSQL"], name: "Farlinhares", description: "A FAR Linhares LTDA atua no comércio atacadista, com forte especialização na distribuição de produtos naturais, suplementos, alimentos e bebidas." }} link="https://www.farlinhares.com.br/" />
            <ProjectCard src={Sidcom} ProjectInfo={{ tecnologies: ["react", "node","postgresSQL","microservice"], name: "Sindicato", description: "Desenvolvi um sistema completo para o Sindicato dos Comerciários, integrado ao PagSeguro, que permite gerenciar carteirinhas dos associados, controlar o uso dos produtos e serviços do clube, administrar empresas conveniadas e emitir relatórios financeiros detalhados." }} link="https://portal.sindcomteresina.com.br/" />
          </>
        ) : (
          projects.map((project, idx) => (
            <ProjectCard
              key={idx}
              src={project.thumb_url}
              ProjectInfo={{
                tecnologies: project.tecnologies,
                name: project.name,
                description: project.description
              }}
              link={project.link}
            />
          ))
        )}
      </div>
    </div>
  );
}