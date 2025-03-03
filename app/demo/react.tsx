import { useState } from "react";
import { flushSync } from "react-dom";
import { Checkbox } from "~/ui/Checkbox";
import { Circle } from "~/ui/Circle";

export const ReactDemo = () => {
  const [moved, setMoved] = useState(false);
  const handleInputChange = () => {
    document.startViewTransition(() => {
      setMoved((prevMoved) => !prevMoved);
    });
  };

  return (
    <div className="space-y-4">
      <Checkbox onChange={handleInputChange} label="move" />
      <div className="relative min-h-20">
        <Circle id="circleId" className={moved ? "left-[200px]" : ""} />
      </div>
    </div>
  );
};
