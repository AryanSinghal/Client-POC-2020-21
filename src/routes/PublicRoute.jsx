import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { PublicLayout } from '../Layout';

const PublicRoute = ({ component: Component, ...rest }) => (
  <>
    <Route
      {...rest}
      render={(matchProps) => (
        <PublicLayout>
          <Component {...matchProps} />
        </PublicLayout>
      )}
    />
  </>
);

PublicRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default PublicRoute;
