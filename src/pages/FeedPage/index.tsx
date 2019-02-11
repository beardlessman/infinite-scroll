import * as React from 'react';
import Sticky from '../../components/Sticky';
import Panel from '../../components/Panel';
import Feed from '../../features/Feed';

import './style.css';

class FeedPage extends React.Component {
  render() {
    return (
      <div className="page">
        <Sticky className="page__header">
          <Panel>Верхняя панель</Panel>
        </Sticky>
        <div className="page__main">
          <Sticky className="page__sidebar">
            <Panel>Боковая панель</Panel>
          </Sticky>
          <div className="page__content">
            <Feed />
          </div>
        </div>
      </div>
    );
  }
}

export default FeedPage;
