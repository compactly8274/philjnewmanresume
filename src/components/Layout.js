import React from 'react';
import PropTypes from 'prop-types';

import '../assets/sass/resume.scss';

const Layout = ({ children }) => (
  <div className="main-body">{children}</div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
