import { Box } from '@chakra-ui/react';
import { Helmet } from 'react-helmet';
import { domain, routeConfig } from '../../../config/route.config';

export const Character = () => {
  return (
    <>
      <Helmet>
        <title>{routeConfig.character.name}</title>
        <link rel='canonical' href={domain + routeConfig.character.path} />
      </Helmet>
      <Box w='100%' h='100%'>
        Character
      </Box>
    </>
  );
};
