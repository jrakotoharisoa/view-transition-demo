import type { Venue } from "~/data/venues";
import { VenueImage } from "./VenueImage";

export const VenueDetails: React.FC<{ venue: Venue; onClick?: () => void }> = ({
  venue,
  onClick: handleClick,
}) => {
  return (
    <>
      <div>
        <button
          onClick={handleClick}
          className="hover:text-brand-secondary underline"
        >
          Go back
        </button>
      </div>
      <div
        className="relative space-y-2 rounded border border-slate-500 p-4"
        style={{ viewTransitionName: "container" }}
      >
        <VenueImage src={venue.imgSrc} />
        <div>
          <h3 className="text-brand-secondary font-bold">{venue.subname}</h3>
          <h2 className="title-2">{venue.name}</h2>
          <p className="text-content-secondary">{venue.description}</p>
        </div>
      </div>
    </>
  );
};
