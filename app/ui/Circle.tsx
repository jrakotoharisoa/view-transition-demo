import { twMerge } from "tailwind-merge";

export const Circle: React.FC<{ id: string; className?: string }> = ({
  id,
  className,
}) => (
  <div
    id={id}
    className={twMerge("absolute size-20 rounded-full bg-gray-800", className)}
    style={{
      viewTransitionName: id,
    }}
  />
);
