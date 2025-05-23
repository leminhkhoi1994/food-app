'use client';

import { memo, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import { setError, errorSelector } from '../../slices/error';

const ErrorPage = ({ history }) => {
  const error = useSelector(errorSelector);

  const dispatch = useDispatch();

  const onClearError = useCallback(() => {
    dispatch(setError({}));
  }, []);

  useEffect(() => {
    if (Object.keys(error).length <= 0) {
      history.push('/');
    }
  }, [error]);

  const { StatusCode: statusCode = 400, Data: data = [] } =
    error?.response?.data || {};
  const messageError =
    data?.[0]?.Message || 'Sorry, something went wrong there. Try again.';

  return <>message={messageError}</>;
};

ErrorPage.propTypes = { history: PropTypes.object.isRequired };

export default memo(ErrorPage);
