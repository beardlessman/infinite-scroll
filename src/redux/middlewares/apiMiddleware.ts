import { AxiosResponse } from 'axios';
import isFunction from '../../helpers/isFunction';
import isPromise from '../../helpers/isPromise';
import { Middleware } from 'redux';
import IRootState from '../IRootState';

const apiMiddleware: Middleware<{}, IRootState, any> = ({ dispatch, getState }) => {
  return next => action => {
    if (!isFunction(action.promise)) {
      return next(action);
    }

    let actionPromise = action.promise();

    if (!isPromise(actionPromise)) {
      return next(action);
    }

    action.type && dispatch({ type: action.type });

    return actionPromise
      .then((response: AxiosResponse) => {
        return response;
      })
      .catch((errors: any) => {
        throw errors;
      });
  };
};

export default apiMiddleware;
