import { venues } from "~/data/venues";
import { VenueDetails } from "~/demo/venue/VenueDetails";
import type { Route } from "./+types/venue-details";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Venues | View transition API" }];
}

export function loader({ params }: Route.LoaderArgs) {
  const venue = venues.find((venue) => venue.slug === params.slug);
  return { venue };
}

export default function Venues({ loaderData }: Route.ComponentProps) {
  if (!loaderData.venue) {
    return;
  }

  return (
    <main className="mx-auto max-w-screen-lg space-y-4 p-4">
      <VenueDetails venue={loaderData.venue} />
    </main>
  );
}
