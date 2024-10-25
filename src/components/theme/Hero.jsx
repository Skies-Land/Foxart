import { grid } from "../../assets"

export const Grid = () => {
  return (
    <img 
        src={grid} 
        alt="Grid" 
        className="hidden lg:block absolute -top-[1.125rem] left-0 z-0 w-full h-full object-contain object-top pointer-events-none opacity-50" 
    />
  );
};
