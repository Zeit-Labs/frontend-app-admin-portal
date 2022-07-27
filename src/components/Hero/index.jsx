import React from 'react';
import PropTypes from 'prop-types';

import { configuration } from '../../config';

function Hero({ title }) {
  const edxWhiteSemiTransparentLogo = configuration.LOGO_WHITE_URL;
  return (
    <div className="hero">
      <div>
        <h1>{title}</h1>
      </div>
      <div>
        <img src={edxWhiteSemiTransparentLogo} alt="edX logo" />
      </div>
    </div>
  );
}

Hero.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Hero;
