import React, { Suspense } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
const Footer = React.lazy(() => import('../components/Footer/Footer'));

const AuthLayout = (props) => {
  const { children } = props;
  if (!!localStorage.getItem('token'))
    return <Redirect to="/home" />
  return (
    <>
      {children}
      <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense>
    </>
  );
};

AuthLayout.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};

export default AuthLayout;
