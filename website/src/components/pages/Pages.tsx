import { Route, Routes } from 'react-router-dom';
import { routeConfig } from '../../config/route.config';
import { Character } from './character/Character';
import { Home } from './home/Home';
import { Team } from './team/Team';

export const Pages = () => {
  return (
    <Routes>
      <Route path={routeConfig.home.path} element={<Home />} />
      <Route path={routeConfig.team.path} element={<Team />} />
      <Route path={routeConfig.character.path} element={<Character />} />
    </Routes>
  );
};
