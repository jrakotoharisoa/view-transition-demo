import { twMerge } from "tailwind-merge";

export const Circle: React.FC<{
  id: string;
  className?: string;
  style?: React.CSSProperties;
}> = ({ id, className, style = {} }) => (
  <div
    id={id}
    className={twMerge(
      "bg-brand-secondary absolute size-20 rounded-full",
      className,
    )}
    style={style}
  />
);
