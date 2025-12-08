import Image from "next/image"
import "@/app/styles/skillCard.scss"

interface TecnologyInfoProps {
  name: string;
  time: string;
}

// Função para obter ícone baseado no nome da tecnologia
const getTechnologyIcon = (name: string) => {
  const iconMap: { [key: string]: string } = {
    "Git": "⚡",
    "AWS": "☁️",
    "Python": "🐍",
    "Java": "☕",
    "Flask": "🌶️",
    "Express": "🚀",
    "Fastify": "⚡",
    "Prisma": "🔷",
    "MySQL": "🗄️",
    "MongoDB": "🍃",
    "Redis": "🔴",
    "Cloudflare": "🛡️",
    "Material UI": "🎨",
    "Styled Components": "💅",
    "Chakra UI": "✨",
    "PandaCSS": "🐼",
    "Design System": "🎯",
    "Microservices": "🔧",
    "Apache Kafka": "📨",
  };

  return iconMap[name] || name.charAt(0).toUpperCase();
};

export const SkillCard = ({src, tecnologyInfo, color}:{src?: string, tecnologyInfo: TecnologyInfoProps, color: string}) => {
  return (
    <div className="skill-card w-full max-[660px]:min-w-full min-w-[30%] h-[100px] flex bg-[#202123] border border-[#A8A8A8] items-center px-6 gap-6 transition-all duration-300 hover:border-opacity-100 hover:scale-[1.02]" style={{ "--g-card-color": color } as React.CSSProperties}>
      {src ? (
        <div className="w-[40px] h-[40px] flex items-center justify-center flex-shrink-0">
          <Image
            src={src}
            alt={tecnologyInfo.name}
            width={40}
            height={40}
            className="object-contain"
          />
        </div>
      ) : (
        <div className="w-[40px] h-[40px] flex items-center justify-center text-[28px] flex-shrink-0" title={tecnologyInfo.name}>
          {getTechnologyIcon(tecnologyInfo.name)}
        </div>
      )}
      <div className="flex-1 min-w-0">
        <div className="font-medium text-base truncate">
          {tecnologyInfo.name}
        </div>
        {tecnologyInfo.time && (
          <div className="text-sm opacity-70 mt-1">
            {tecnologyInfo.time}
          </div>
        )}
      </div>
      <div className="g-card"></div>
    </div>
  )
}