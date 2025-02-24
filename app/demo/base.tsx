import { useEffect, useId } from "react";
import { twMerge } from "tailwind-merge";

const INPUT_ID = "INPUT_ID";
const ELEMENT_ID = "ELEMENT_ID";

export const BaseDemo = () => {
  // useEffect(() => {
  //   const input = document.getElementById(INPUT_ID);
  //   // Call startViewTransition to animate
  //   input?.addEventListener("change", runViewTransition);
  // }, []);

  const handleInputChange = () => {
    runViewTransition();
  };

  return (
    <div>
      <label className="flex items-center gap-2">
        <input type="checkbox" id={INPUT_ID} onChange={handleInputChange} />
        <span>Move</span>
      </label>
      <div className="relative">
        <Circle />
      </div>
    </div>
  );
};

const runViewTransition = () => {
  document.startViewTransition(() => {
    const element = document.getElementById(ELEMENT_ID);
    element?.classList.toggle("left-[200px]");
  });
};

const Circle: React.FC = () => (
  <div
    id={ELEMENT_ID}
    className="absolute top-4 size-20 rounded-full bg-gray-800"
    style={{
      viewTransitionName: "id", // view-transition-name
    }}
  />
);
