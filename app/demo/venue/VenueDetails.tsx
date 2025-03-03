import type { Venue } from "~/data/venues";
import { VenueImage } from "./VenueImage";

export const VenueDetails: React.FC<{ venue: Venue; onClick?: () => void }> = ({
  venue,
  onClick: handleClick,
}) => {
  return (
    <>
      {handleClick && (
        <div>
          <button
            onClick={handleClick}
            className="hover:text-brand-secondary underline"
          >
            Go back
          </button>
        </div>
      )}
      <div className="bg-background-primary relative space-y-2 rounded p-4">
        <div>
          <h3 className="text-brand-secondary font-bold">{venue.subname}</h3>
          <h2 className="title-2">{venue.name}</h2>
        </div>
        <VenueImage src={venue.imgSrc} />
        <p className="text-content-secondary">{venue.description}</p>
      </div>
    </>
  );
};
