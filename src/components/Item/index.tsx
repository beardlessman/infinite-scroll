import * as React from 'react';
import IFeedItem from '../../types/IFeedItem';

// import './style.css';

interface IProps {
  data: IFeedItem;
}

class Item extends React.Component<IProps> {
  render() {
    return <div className="item">{this.props.data.title}</div>;
  }
}

export default Item;
