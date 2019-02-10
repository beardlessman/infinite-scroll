import { combineReducers } from 'redux';
import { FeedReducer } from './modules/feed/reducers';

export default combineReducers({
  feed: FeedReducer(),
});
