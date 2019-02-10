import { AxiosResponse } from 'axios';
import api from '../../../../api';

export const GET_FEED_REQUEST = 'GET_FEED_REQUEST';
export const GET_FEED_SUCCESS = 'GET_FEED_SUCCESS';
export const GET_FEED_FAILURE = 'GET_FEED_FAILURE';
export const GET_FEED_CANCEL = 'GET_FEED_CANCEL';

export const getFeed = (id: number): any => {
  return dispatch => {
    return dispatch({
      type: GET_FEED_REQUEST,
      promise: () => api.getFeed({ id }),
    })
      .then((response: AxiosResponse) => {
        dispatch({ type: GET_FEED_SUCCESS, payload: response.data });
        return response;
      })
      .catch((errors: any) => {
        dispatch({ type: GET_FEED_FAILURE, payload: errors });
        throw errors;
      });
  };
};
