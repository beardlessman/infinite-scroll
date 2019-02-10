import * as React from 'react';
import IItem from '../../types/Item';

// import './style.css';

interface IProps {
  data: IItem;
}

class Item extends React.Component<IProps> {
  render() {
    return <div className="item">{this.props.data.text}</div>;
  }
}

export default Item;
