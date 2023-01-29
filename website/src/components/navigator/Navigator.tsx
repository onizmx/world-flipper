import { Box, SimpleGrid, Text } from '@chakra-ui/react';
import { Link, Location, useLocation } from 'react-router-dom';
import { routeConfig } from '../../config/route.config';
import { Route } from '../../config/route.config.types';

const routes: Route[] = [routeConfig.team, routeConfig.character];

export const Navigator = () => {
  const location: Location = useLocation();

  return (
    <SimpleGrid>
      {routes.map((route: Route) => {
        const borderColor: string = location.pathname === route.path ? '#ff9f17' : 'transparent';

        return (
          <Box key={route.name} w='100%' padding='8px' border='4px solid' borderColor={borderColor}>
            <Link to={route.path}>
              <Text fontSize='2xl'>{route.name}</Text>
            </Link>
          </Box>
        );
      })}
    </SimpleGrid>
  );
};
