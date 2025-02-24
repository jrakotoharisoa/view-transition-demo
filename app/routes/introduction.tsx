import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { BaseDemo } from "~/demo/base";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Introduction | View transition API" }];
}

export default function Introduction() {
  return (
    <main className="mx-auto max-w-screen-lg p-4">
      <h1 className="title-1">Introduction</h1>
      <BaseDemo />
    </main>
  );
}
