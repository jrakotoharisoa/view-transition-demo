import {
  type RouteConfig,
  index,
  route,
  prefix,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("api", "routes/api.tsx"),
  route("react", "routes/react.tsx"),
  ...prefix("venues", [
    index("routes/venues.tsx"),
    route(":slug", "routes/venue-details.tsx"),
  ]),
] satisfies RouteConfig;
