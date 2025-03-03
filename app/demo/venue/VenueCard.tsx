import type { Venue } from "~/data/venues";
import { VenueImage } from "./VenueImage";

export const VenueCard: React.FC<{ venue: Venue; onClick?: () => void }> = ({
  venue,
  onClick: handleClick,
}) => {
  return (
    <div className="hover:text-brand-primary hover:border-brand-primary bg-primary bg-background-primary relative max-w-[400px] space-y-2 rounded p-4 hover:cursor-pointer">
      <VenueImage src={venue.imgSrc} />
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-brand-secondary font-bold">{venue.subname}</h3>
          <h2 className="title-2">{venue.name}</h2>
        </div>
        <button
          className="rounded border px-3 py-2 hover:cursor-pointer"
          onClick={handleClick}
        >
          View
        </button>
      </div>
    </div>
  );
};
