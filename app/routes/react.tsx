import { useState } from "react";
import { venues } from "~/data/venues";
import { VenueCard } from "~/demo/venue/VenueCard";
import { VenueDetails } from "~/demo/venue/VenueDetails";
import type { Route } from "./+types/react";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Venues | View transition API" }];
}

export default function Venues() {
  const [showDetails, setShowDetails] = useState(false);
  const toggleShowDetails = () => {
    setShowDetails((prevState) => !prevState);
  };
  return (
    <main className="mx-auto max-w-screen-lg space-y-4 p-4">
      <h1
        className="title-1 w-fit"
        style={{ viewTransitionName: "title-react" }}
      >
        React demo
      </h1>
      {showDetails ? (
        <VenueDetails venue={venues[0]} onClick={toggleShowDetails} />
      ) : (
        <VenueCard venue={venues[0]} onClick={toggleShowDetails} />
      )}
    </main>
  );
}
