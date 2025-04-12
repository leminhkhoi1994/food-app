import { memo } from 'react';
import PropTypes from 'prop-types';

import { STATUS_CODE } from 'constants/statusCodes';

import { convertParamsToObject } from 'services/format/uri';

const NotFoundPage = ({ location }) => {
  const { messageError } = convertParamsToObject(location?.search) || {};

  return <>{messageError}</>;
};

NotFoundPage.propTypes = { location: PropTypes.any.isRequired };

export default memo(NotFoundPage);
