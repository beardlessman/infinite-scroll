import * as React from 'react';
import { connect } from 'react-redux';
import { AxiosResponse } from 'axios';
import FeedItem from '../../components/FeedItem';
import Loader from '../../components/Loader';
import { IFeedState } from '../../redux/modules/feed/types';
import { getFeed } from '../../redux/modules/feed/actions';
import getRandomInteger from '../../helpers/getRandomInteger';
import IRootState from '../../redux/IRootState';

interface IStateToProps {
  feed: IFeedState;
}

interface IDispatchToProps {
  getFeed: (id: number) => Promise<AxiosResponse>;
}

import './style.css';

class Feed extends React.Component<IStateToProps & IDispatchToProps> {
  componentDidMount() {
    this.props.getFeed(1);
    window.addEventListener('scroll', this.onScroll, false);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false);
  }

  onScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 && this.props.feed.list.length) {
      this.increaseFeed();
    }
  };

  increaseFeed = () => {
    if (!this.props.feed.isLoading) {
      this.props.getFeed(getRandomInteger(1, 10));
    }
  };

  render() {
    const { list } = this.props.feed;

    return (
      <div className="feed">
        {list.map((item, index) => (
          <FeedItem key={index} data={item} />
        ))}
        {this.props.feed.isLoading && <Loader />}
      </div>
    );
  }
}

export default connect<IStateToProps, IDispatchToProps>(
  (state: IRootState | any) => ({
    feed: state.feed,
  }),
  {
    getFeed,
  },
)(Feed);
