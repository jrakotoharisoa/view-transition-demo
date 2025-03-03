import { flushSync } from "react-dom";
import { LiveEditor, LiveError, LivePreview, LiveProvider } from "react-live";
import { Checkbox } from "~/ui/Checkbox";
import { Circle } from "~/ui/Circle";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Live | View transition API" }];
}

const scope = { Checkbox, Circle, flushSync };

const code = `
function demo() {
  const ELEMENT_ID = 'circle-id';

  const handleInputChange = () => {
    const element = document.getElementById(ELEMENT_ID);
    element?.classList.toggle("left-[200px]");
  };

  return (
    <div className="space-y-4">
      <Checkbox label="move" onChange={handleInputChange} />
      <div className="relative min-h-20">
        <Circle id={ELEMENT_ID} />
      </div>
    </div>
  );
}
`;

export default function Live() {
  return (
    <main className="mx-auto max-w-screen-lg p-4">
      <h1 className="title-1">Live demo</h1>
      <div className="grid grid-cols-2 gap-4">
        <LiveProvider code={code} scope={scope} enableTypeScript language="tsx">
          <LiveEditor />
          <LiveError />
          <LivePreview />
        </LiveProvider>
      </div>
    </main>
  );
}
