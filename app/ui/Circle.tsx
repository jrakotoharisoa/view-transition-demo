import { twMerge } from "tailwind-merge";

export const Circle: React.FC<{
  id: string;
  className?: string;
  style?: React.CSSProperties;
}> = ({ id, className, style = {} }) => (
  <div
    id={id}
    className={twMerge("absolute size-20 rounded-full bg-gray-800", className)}
    style={style}
  />
);
