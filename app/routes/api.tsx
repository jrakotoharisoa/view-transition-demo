import { flushSync } from "react-dom";
import { type ComponentProps } from "react";
import { LiveEditor, LiveError, LivePreview, LiveProvider } from "react-live";
import { Checkbox } from "~/ui/Checkbox";
import { Circle } from "~/ui/Circle";
import type { Route } from "./+types/api";
import { twMerge } from "tailwind-merge";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Live | View transition API" }];
}
const SMALL_CIRCLE_ID = "small-circle-id";
const BIG_CIRCLE_ID = "big-circle-id";
const SmallCircle: React.FC<ComponentProps<typeof Circle>> = (props) => (
  <Circle {...props} id={SMALL_CIRCLE_ID} />
);
const BigCircle: React.FC<ComponentProps<typeof Circle>> = (props) => (
  <Circle
    {...props}
    id={BIG_CIRCLE_ID}
    className={twMerge("bg-brand-primary size-40", props.className)}
  />
);

const scope = {
  Checkbox,
  SmallCircle,
  BigCircle,
  BIG_CIRCLE_ID,
  SMALL_CIRCLE_ID,
  flushSync,
};

const code = `
function demo() {
  const handleInputChange = () => {
    const smallCircle = document.getElementById(SMALL_CIRCLE_ID);
    const bigCircle = document.getElementById(BIG_CIRCLE_ID);
    smallCircle?.classList.toggle("hidden");
    bigCircle?.classList.toggle("hidden");
  };

  return (
    <div className="space-y-4">
      <Checkbox label="Animate" onChange={handleInputChange} />
      <div className="relative min-h-20">
        <SmallCircle  />
        <BigCircle className="hidden left-[200px] " />
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
