import { ReactNode } from "react";

interface SocialNetworkButtonProps {
  children: ReactNode;
  link: string;
}

export const SocialNetworkButton = ({ children, link }: SocialNetworkButtonProps) => {
  return (
    <button className="w-8 h-8 sm:w-10 sm:h-10 opacity-50 hover:opacity-100 hover:transform hover:scale-110 transition-transform duration-200 flex items-center justify-center" onClick={() => window.open(link, '_blank')}>
      <div className="w-full h-full">{children}</div>
    </button>
  );
}