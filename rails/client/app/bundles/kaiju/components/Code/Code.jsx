import React from 'react';
import PropTypes from 'prop-types';
import './Code.scss';

const propTypes = {
  /**
   * Preformatted React-JSX code
   */
  code: PropTypes.string,
};

const Code = ({ code }) => (
  // eslint-disable-next-line react/no-danger
  <pre className="highlight" dangerouslySetInnerHTML={{ __html: code }} />
);

Code.propTypes = propTypes;

export default Code;
