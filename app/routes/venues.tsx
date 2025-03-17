import { Link } from "react-router";
import { venues } from "~/data/venues";
import { VenueCard } from "~/demo/venue/VenueCard";
import type { Route } from "./+types/venues";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Venues | View transition API" }];
}

export default function Venues() {
  return (
    <main className="mx-auto max-w-screen-lg space-y-4 p-4">
      <h1 className="title-1">Comet Venues</h1>
      <ul className="flex flex-wrap gap-4">
        {venues.map((venue) => (
          <li key={venue.slug}>
            <Link to={`./${venue.slug}`}>
              <VenueCard venue={venue} />
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
