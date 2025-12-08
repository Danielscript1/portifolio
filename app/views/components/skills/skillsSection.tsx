"use client";
import JavaScript from "@/public/assets/logos/Group4.svg"
import TypeScript from "@/public/assets/logos/image.svg"
import React from "@/public/assets/logos/image-1.svg"
import Tailwind from "@/public/assets/logos/image-2.svg"
import Node from "@/public/assets/logos/image-3.svg"
import Next from "@/public/assets/logos/Group 3.svg"
import Postgres from "@/public/assets/logos/postgres.svg"
import Docker from "@/public/assets/logos/docker.svg"
import SqlServer from "@/public/assets/logos/icons8-microsoft-sql-server.svg"
import Figma from "@/public/assets/logos/icons8-figma.svg"
import Native from "@/public/assets/logos/icons8-react-native.svg"
import MaterialUi from "@/public/assets/logos/icons8-material-ui.svg"
import Python from "@/public/assets/logos/icons8-python.svg"
import Prisma from "@/public/assets/logos/icons8-prisma-orm.svg"
import Rabbit from "@/public/assets/logos/rabbitmq-plain-wordmark.svg"
import Radis from "@/public/assets/logos/icons8-redis.svg"
import GIT from "@/public/assets/logos/icons8-git.svg"
import { SkillCard } from './skillCard';

export const SkillsSection = () => {
  return (
    <div id="skills-section" className="sw-full h-auto flex flex-col justify-start pt-[100px] 2xl:pt-[200px] pb-[100px] items-start font-jersey font-lg text-[#C2C2C2]">
      <div className="mb-10 font-sm text-[2rem]">TECNOLOGIAS & FERRAMENTAS</div>
      
      {/* Frontend */}
      <div className="w-full mb-8">
        <div className="mb-6 text-[1.5rem] font-medium opacity-80 border-b border-[#A8A8A8] pb-2">Frontend</div>
        <div className="w-full flex flex-wrap justify-start gap-10 max-[860px]:grid max-[860px]:grid-cols-2 max-[700px]:grid-cols-1 grid grid-cols-3">
          <SkillCard src={React} tecnologyInfo={{ name: "React.js", time: "" }} color="0, 216, 255" />
          <SkillCard src={Native} tecnologyInfo={{ name: "React Native", time: "" }} color="0, 216, 255" />
          <SkillCard src={Next} tecnologyInfo={{ name: "Next.js", time: "" }} color="0, 0, 0" />
          <SkillCard src={TypeScript} tecnologyInfo={{ name: "TypeScript", time: "" }} color="0, 122, 204" />
          <SkillCard src={JavaScript} tecnologyInfo={{ name: "JavaScript", time: "" }} color="247, 223, 30" />
          <SkillCard src={Tailwind} tecnologyInfo={{ name: "Tailwind CSS", time: "" }} color="6, 182, 212" />
          <SkillCard tecnologyInfo={{ name: "PandaCSS", time: "" }} color="255, 99, 71" />
          <SkillCard  src={MaterialUi} tecnologyInfo={{ name: "Material UI", time: "" }} color="0, 176, 255" />
          <SkillCard tecnologyInfo={{ name: "Styled Components", time: "" }} color="219, 112, 147" />
          <SkillCard tecnologyInfo={{ name: "Design System", time: "" }} color="138, 43, 226" />
          <SkillCard tecnologyInfo={{ name: "Chakra UI", time: "" }} color="60, 179, 113" />
        </div>
      </div>

      {/* Backend */}
      <div className="w-full mb-8">
        <div className="mb-6 text-[1.5rem] font-medium opacity-80 border-b border-[#A8A8A8] pb-2">Backend</div>
        <div className="w-full flex flex-wrap justify-start gap-10 max-[860px]:grid max-[860px]:grid-cols-2 max-[700px]:grid-cols-1 grid grid-cols-3">
          <SkillCard src={Node} tecnologyInfo={{ name: "Node.js", time: "" }} color="83, 158, 67" />
          <SkillCard tecnologyInfo={{ name: "Express", time: "" }} color="0, 0, 0" />
          <SkillCard tecnologyInfo={{ name: "Fastify", time: "" }} color="255, 255, 255" />
          <SkillCard tecnologyInfo={{ name: "Java", time: "" }} color="244, 67, 54" />
          <SkillCard tecnologyInfo={{ name: "Spring Boot", time: "" }} color="108, 187, 60" />
          <SkillCard tecnologyInfo={{ name: "Flask", time: "" }} color="0, 0, 0" />
          <SkillCard src={Python} tecnologyInfo={{ name: "Python", time: "" }} color="48, 105, 152" />
          <SkillCard src={Prisma} tecnologyInfo={{ name: "Prisma", time: "" }} color="45, 55, 72" />
        </div>
      </div>

      {/* Arquitetura & Padrões */}
      <div className="w-full mb-8">
        <div className="mb-6 text-[1.5rem] font-medium opacity-80 border-b border-[#A8A8A8] pb-2">Arquitetura & Padrões</div>
        <div className="w-full flex flex-wrap justify-start gap-10 max-[860px]:grid max-[860px]:grid-cols-2 max-[700px]:grid-cols-1 grid grid-cols-3">
          <SkillCard tecnologyInfo={{ name: "Microservices", time: "" }} color="100, 149, 237" />
          <SkillCard tecnologyInfo={{ name: "Apache Kafka", time: "" }} color="0, 0, 0" />
           <SkillCard src={Rabbit} tecnologyInfo={{ name: "RabbitMQ", time: "" }} color="0, 0, 0" />
        </div>
      </div>

      {/* Bancos de Dados */}
      <div className="w-full mb-8">
        <div className="mb-6 text-[1.5rem] font-medium opacity-80 border-b border-[#A8A8A8] pb-2">Bancos de Dados</div>
        <div className="w-full flex flex-wrap justify-start gap-10 max-[860px]:grid max-[860px]:grid-cols-2 max-[700px]:grid-cols-1 grid grid-cols-3">
          <SkillCard src={Postgres} tecnologyInfo={{ name: "PostgreSQL", time: "" }} color="0, 122, 204" />
          <SkillCard src={SqlServer} tecnologyInfo={{ name: "SqlServer", time: "" }} color="0, 122, 204" />
          <SkillCard tecnologyInfo={{ name: "MySQL", time: "" }} color="0, 96, 150" />
          <SkillCard tecnologyInfo={{ name: "MongoDB", time: "" }} color="0, 230, 118" />
        </div>
      </div>

      {/* DevOps & Cloud */}
      <div className="w-full mb-8">
        <div className="mb-6 text-[1.5rem] font-medium opacity-80 border-b border-[#A8A8A8] pb-2">DevOps & Cloud</div>
        <div className="w-full flex flex-wrap justify-start gap-10 max-[860px]:grid max-[860px]:grid-cols-2 max-[700px]:grid-cols-1 grid grid-cols-3">
          <SkillCard src={Docker} tecnologyInfo={{ name: "Docker", time: "" }} color="0, 122, 204" />
          <SkillCard tecnologyInfo={{ name: "AWS", time: "" }} color="255, 153, 0" />
          <SkillCard tecnologyInfo={{ name: "Cloudflare", time: "" }} color="243, 79, 28" />
          <SkillCard src={Radis} tecnologyInfo={{ name: "Redis", time: "" }} color="220, 20, 60" />
        </div>
      </div>

      {/* Ferramentas */}
      <div className="w-full">
        <div className="mb-6 text-[1.5rem] font-medium opacity-80 border-b border-[#A8A8A8] pb-2">Ferramentas</div>
        <div className="w-full flex flex-wrap justify-start gap-10 max-[860px]:grid max-[860px]:grid-cols-2 max-[700px]:grid-cols-1 grid grid-cols-3">
          <SkillCard src={GIT} tecnologyInfo={{ name: "Git", time: "" }} color="240, 81, 51" />
          <SkillCard src={Figma} tecnologyInfo={{ name: "Figma", time: "" }} color="240, 81, 51" />
        </div>
      </div>
    </div>
  );
}