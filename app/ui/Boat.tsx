import { twMerge } from "tailwind-merge";

export const Boat: React.FC<{
  id: string;
  className?: string;
  style?: React.CSSProperties;
}> = ({ id, className, style = {} }) => (
  <div id={id} className={twMerge("w-fit text-xl", className)} style={style}>
    🚣‍♂️
  </div>
);
