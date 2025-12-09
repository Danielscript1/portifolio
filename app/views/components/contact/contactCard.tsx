import "@/app/styles/skillCard.scss"
import { ReactNode } from "react";

export const ContactCard = ({ children, contact, link }: { children: ReactNode, contact: string, link: string }) => {
  return (
    <div className="skill-card w-full sm:w-[48%] lg:w-[30%] min-h-[80px] sm:h-[100px] flex bg-[#202123] border border-[#A8A8A8] items-center px-4 sm:px-6 gap-4 sm:gap-6">
      <div className="flex w-full items-center gap-4 sm:gap-6 min-w-0">
        <div className="w-[32px] h-[32px] sm:w-[40px] sm:h-[40px] flex-shrink-0 flex items-center justify-center">
          <div className="w-full h-full [&>svg]:w-full [&>svg]:h-full">{children}</div>
        </div>
        <button 
          onClick={() => window.open(link, '_blank')} 
          className="text-sm sm:text-base text-left break-words overflow-wrap-anywhere hover:opacity-80 transition-opacity flex-1 min-w-0"
        >
          {contact}
        </button>
      </div>
    </div>
  )
}