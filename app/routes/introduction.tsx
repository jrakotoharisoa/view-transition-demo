import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { BaseDemo } from "~/demo/base";
import { ReactDemo } from "~/demo/react";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Introduction | View transition API" }];
}

export default function Introduction() {
  return (
    <main className="mx-auto max-w-screen-lg p-4">
      <h1 className="title-1">Introduction</h1>
      <div>
        <h2 className="title-2">Demo 1</h2>
        <BaseDemo />
      </div>
      <div>
        <h2 className="title-2">Demo with react state</h2>
        <ReactDemo />
      </div>
    </main>
  );
}
