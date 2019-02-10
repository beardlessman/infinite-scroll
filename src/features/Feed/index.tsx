import * as React from 'react';
import Item from '../../components/Item';
import feed from '../../stubs/feed';

// import './style.css';

class Feed extends React.Component {
  render() {
    //   const {list } = this.props;
    const list = feed;

    console.log(list);

    return (
      <div className="feed">
        {list.map(item => (
          <Item key={item.id} data={item} />
        ))}
      </div>
    );
  }
}

export default Feed;
