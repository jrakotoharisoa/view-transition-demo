import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { Link } from "react-router";
import { twMerge } from "tailwind-merge";

export function meta({}: Route.MetaArgs) {
  return [{ title: "View transition API" }];
}

export default function Home() {
  return (
    <main className="mx-auto max-w-screen-lg space-y-4 p-4">
      <h1 className="title-1">View transition API | Demos</h1>
      <ul className="space-y-2">
        <li>
          <Link
            className={linkClassname}
            to="/api"
            viewTransition
            style={{ viewTransitionName: "title-api" }}
          >
            API demo
          </Link>
        </li>

        <li>
          <Link
            className={linkClassname}
            to="/react"
            viewTransition
            style={{ viewTransitionName: "title-react" }}
          >
            React demo
          </Link>
        </li>
        <li>
          <Link
            className={linkClassname}
            to="/venues"
            viewTransition
            style={{ viewTransitionName: "title-react-router" }}
          >
            React-router demo
          </Link>
        </li>
      </ul>
    </main>
  );
}

const linkClassname = "underline hover:text-teal-600";
