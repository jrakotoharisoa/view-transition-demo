import {
  type RouteConfig,
  index,
  route,
  prefix,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("live", "routes/live.tsx"),
  route("venue", "routes/venue.tsx"),
  ...prefix("venues", [
    index("routes/venues.tsx"),
    route(":slug", "routes/venue-details.tsx"),
  ]),
] satisfies RouteConfig;
