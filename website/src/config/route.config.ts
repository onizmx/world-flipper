import { RouteConfig } from './route.config.types';

export const domain: string = window.location.hostname;

export const routeConfig: RouteConfig = {
  home: {
    path: '/',
    name: 'World Flipper',
  },
  team: {
    path: '/team',
    name: 'Team',
  },
  character: {
    path: '/character',
    name: 'Character',
  },
};
