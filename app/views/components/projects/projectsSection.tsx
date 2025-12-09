"use client";
import Farlinhares from "@/public/assets/farlinhares.png"
import Sidcom from "@/public/assets/sidcom.png"
import Bex from "@/public/assets/logos/image.png"
import Ignis from "@/public/assets/Ignis.png"
import Convenios from "@/public/assets/globo.png"
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
    <div id="projects-section" className="w-full h-auto flex flex-col justify-start pt-[100px] 2xl:pt-[200px] pb-[100px] px-4 sm:px-6 md:px-8 lg:px-0 items-start font-jersey font-lg text-[#C2C2C2]">
      <div className="mb-10 font-sm text-[1.5rem] sm:text-[2rem]">PROJETOS</div>
      <div className="w-full flex flex-wrap justify-center sm:justify-between gap-4 sm:gap-6 md:gap-8 lg:gap-y-10">
        {projects.length === 0 ? (
          <>
            <ProjectCard src={Farlinhares} ProjectInfo={{ tecnologies: ["next", "flask","postgresSQL"], name: "Farlinhares", description: "A FAR Linhares LTDA atua no comércio atacadista, com forte especialização na distribuição de produtos naturais, suplementos, alimentos e bebidas." }} link="https://www.farlinhares.com.br/" />
            <ProjectCard src={Sidcom} ProjectInfo={{ tecnologies: ["react", "node","postgresSQL","microservice"], name: "Sindicato", description: "Desenvolvi um sistema completo para o Sindicato dos Comerciários, integrado ao PagSeguro, que permite gerenciar carteirinhas dos associados, controlar o uso dos produtos e serviços do clube, administrar empresas conveniadas e emitir relatórios financeiros detalhados." }} link="https://portal.sindcomteresina.com.br/" />
            <ProjectCard src={Ignis} ProjectInfo={{ tecnologies: ["react", "node","supabase"], name: "Ignis", description: "O sistema tem como objetivo gerenciar todo o fluxo de matrícula de alunos em cursos, controlar módulos de ensino e automatizar a geração de pagamentos via boleto bancário." }} link="https://poloinstitutoignis.netlify.app/auth" />
            <ProjectCard src={Bex} ProjectInfo={{ tecnologies: ["react", "node","postgresSQL","xmpp"], name: "BeX", description: "O Bex é a plataforma ideal para quem deseja ampliar conexões e explorar oportunidades com pessoas reais e engajadas. Com um ambiente dinâmico e intuitivo, o Bex oferece uma experiência completa de comunicação — seja em conversas individuais ou em grupos." }} link="https://play.google.com/store/apps/details?id=com.gox.app.bex" />
            <ProjectCard src={Convenios} ProjectInfo={{ tecnologies: ["react", "python","postgresSQL","microservice"], name: "Convênios", description: "A plataforma de convênios para funcionários tem como objetivo controlar e acompanhar os gastos realizados em convênios (farmácia) vinculados à folha de pagamento." }} link="https://play.google.com/store/apps/details?id=com.drogariaglobo.convenioglobo" />
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