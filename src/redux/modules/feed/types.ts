// import { IParams } from 'App/types/params';
import IFeedItem from '../../../types/IFeedItem';

export interface IFeedState {
  list: IFeedItem[];
//   params: IParams;
  isLoading: boolean;
  isLoaded: boolean;
}