import { flushSync } from "react-dom";
import { type ComponentProps } from "react";
import { LiveEditor, LiveError, LivePreview, LiveProvider } from "react-live";
import { Checkbox } from "~/ui/Checkbox";
import { Boat } from "~/ui/Boat";
import type { Route } from "./+types/api";
import { twMerge } from "tailwind-merge";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Live | View transition API" }];
}
const FAR_BOAT_ID = "far-boat-id";
const CLOSE_BOAT_ID = "close-boat-id";
const FarBoat: React.FC<ComponentProps<typeof Boat>> = (props) => (
  <Boat {...props} id={FAR_BOAT_ID} />
);
const CloseBoat: React.FC<ComponentProps<typeof Boat>> = (props) => (
  <Boat
    {...props}
    id={CLOSE_BOAT_ID}
    className={twMerge("text-9xl", props.className)}
  />
);

const scope = {
  Checkbox,
  FarBoat,
  CloseBoat,
  CLOSE_BOAT_ID,
  FAR_BOAT_ID,
  flushSync,
};

const code = `
function demo() {
  const handleInputChange = () => {
    const farBoat = document.getElementById(FAR_BOAT_ID);
    const closeBoat = document.getElementById(CLOSE_BOAT_ID);
    farBoat?.classList.toggle("hidden");
    closeBoat?.classList.toggle("hidden");
  };

  return (
    <div className="space-y-4">
      <Checkbox label="Move closer" onChange={handleInputChange} />
      <div className="relative">
        <FarBoat  />
        <CloseBoat className="hidden absolute top-[30px] " />
      </div>
    </div>
  );
}
`;

export default function Live() {
  return (
    <main className="mx-auto max-w-screen-xl p-4">
      <h1 className="title-1 w-fit" style={{ viewTransitionName: "title-api" }}>
        API demo
      </h1>
      <div className="grid grid-cols-2 gap-12">
        <LiveProvider code={code} scope={scope} enableTypeScript language="tsx">
          <LiveEditor />
          <LiveError />
          <LivePreview />
        </LiveProvider>
      </div>
    </main>
  );
}
