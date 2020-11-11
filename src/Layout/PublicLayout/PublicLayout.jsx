import React from 'react';
import PropTypes from 'prop-types';
import { Navbar } from '../components';

const PublicLayout = (props) => {
  const { children } = props;
  return (
    <>
      <Navbar />
      <br />
      {children}
    </>
  );
};

PublicLayout.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};

export default PublicLayout;
