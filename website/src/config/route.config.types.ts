export type Route = {
  path: string;
  name: string;
};

export type RouteConfig = {
  home: Route;
  team: Route;
  character: Route;
};
