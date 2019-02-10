import { GET_FEED_REQUEST, GET_FEED_SUCCESS, GET_FEED_FAILURE } from './actions';
import { IFeedState } from './types';

export const FeedReducer = () => {
  const INITIAL_STATE: IFeedState = {
    list: [],
    isLoaded: false,
    isLoading: false,
  };

  return (state = INITIAL_STATE, action): IFeedState => {
    const { type, payload } = action;

    switch (type) {
      case GET_FEED_REQUEST:
        return {
          ...state,
          isLoading: true,
        };

      case GET_FEED_SUCCESS:
        return {
          ...state,
          list: state.list.concat(payload),
          isLoading: false,
          isLoaded: true,
        };

      case GET_FEED_FAILURE:
        return {
          ...state,
          isLoading: false,
        };

      default:
        return state;
    }
  };
};
