import { Box } from '@chakra-ui/react';
import { Helmet } from 'react-helmet';
import { domain, routeConfig } from '../../../config/route.config';

export const Team = () => {
  return (
    <>
      <Helmet>
        <title>{routeConfig.team.name}</title>
        <link rel='canonical' href={domain + routeConfig.team.path} />
      </Helmet>
      <Box w='100%' h='100%'>
        Team
      </Box>
    </>
  );
};
