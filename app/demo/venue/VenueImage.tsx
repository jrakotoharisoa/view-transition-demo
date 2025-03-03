import { twMerge } from "tailwind-merge";

export const VenueImage: React.FC<
  React.ImgHTMLAttributes<HTMLImageElement>
> = ({ className, ...props }) => {
  return (
    <img {...props} className={twMerge("aspect-video rounded", className)} />
  );
};
