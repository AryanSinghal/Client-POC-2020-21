import React, { Suspense } from 'react';
import { Typography } from '@material-ui/core';
const Footer = React.lazy(() => import('../Layout/components/Footer/Footer'));

const NoMatch = () => (
  <div align="center">
    <Typography gutterBottom variant="h3">
      Not Found
    </Typography>
    <Typography variant="h6">
      Seems like page you are looking for does not exist
    </Typography>
    <Suspense fallback={<div>Loading...</div>}>
      <Footer />
    </Suspense>
  </div>
);

export default NoMatch;
