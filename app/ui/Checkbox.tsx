import { twMerge } from "tailwind-merge";

export const Checkbox: React.FC<
  { label: string } & Omit<React.InputHTMLAttributes<HTMLInputElement>, "type">
> = ({ label, ...inputProps }) => (
  <label className="flex items-center gap-2">
    <input type="checkbox" {...inputProps} />
    <span>{label}</span>
  </label>
);
