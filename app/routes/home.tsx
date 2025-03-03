import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { Link } from "react-router";
import { twMerge } from "tailwind-merge";

export function meta({}: Route.MetaArgs) {
  return [{ title: "View transition API" }];
}

export default function Home() {
  return (
    <main className="mx-auto max-w-screen-lg p-4">
      <h1 className="title-1">View transition API | Demos</h1>
      <ul>
        <li>
          <Link className={linkClassname} to="/into">
            Intro
          </Link>
        </li>
        <li>
          <Link className={linkClassname} to="/venue">
            Venue
          </Link>
        </li>
        <li>
          <Link className={linkClassname} to="/venues">
            React-router Venue
          </Link>
        </li>
      </ul>
    </main>
  );
}

const linkClassname = "underline hover:text-teal-600";
