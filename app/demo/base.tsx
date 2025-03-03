import { Checkbox } from "~/ui/Checkbox";
import { Circle } from "~/ui/Circle";

const ELEMENT_ID = "ELEMENT_ID";

export const BaseDemo = () => {
  const handleInputChange = () => {
    document.startViewTransition(() => {
      const element = document.getElementById(ELEMENT_ID);
      element?.classList.toggle("left-[200px]");
    });
  };

  return (
    <div className="space-y-4">
      <Checkbox onChange={handleInputChange} label="move" />
      <div className="relative min-h-20">
        <Circle id={ELEMENT_ID} />
      </div>
    </div>
  );
};
