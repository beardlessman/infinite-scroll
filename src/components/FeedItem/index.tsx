import * as React from 'react';
import IFeedItem from '../../types/IFeedItem';

import './style.css';

interface IProps {
  data: IFeedItem;
}

class FeedItem extends React.Component<IProps> {
  render() {
    return <div className="feed-item">{this.props.data.title}</div>;
  }
}

export default FeedItem;
