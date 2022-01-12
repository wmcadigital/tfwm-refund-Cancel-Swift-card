import React from 'react';
import PropTypes from 'prop-types';

const SectionStepInfo = ({ section, description }) => {
  return (
    <div className="wmnds-progress-indicator">
      {section}
      <h4>{description}</h4>
    </div>
  );
};

SectionStepInfo.propTypes = {
  section: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default SectionStepInfo;
