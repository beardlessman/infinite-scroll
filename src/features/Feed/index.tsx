import * as React from 'react';
import { connect } from 'react-redux';
import { AxiosResponse } from 'axios';
import Item from '../../components/Item';
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

// import './style.css';

class Feed extends React.Component<IStateToProps & IDispatchToProps> {
  componentDidMount() {
    this.props.getFeed(1);
  }
  increaseFeed = () => {
    this.props.getFeed(getRandomInteger(1, 10));
  };
  render() {
    const { list } = this.props.feed;

    return (
      <div className="feed">
        {list.map((item, index) => (
          <Item key={index} data={item} />
        ))}
        <button onClick={this.increaseFeed}>More</button>
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