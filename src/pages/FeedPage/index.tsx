import * as React from 'react';
import Panel from '../../components/Panel';
import Feed from '../../features/Feed';

import './style.css';

class FeedPage extends React.Component {
  render() {
    return (
      <div className="page">
        <div className="page__header">
          <Panel>Верхняя панель</Panel>
        </div>
        <div className="page__main">
          <div className="page__sidebar">
            <Panel>Боковая панель</Panel>
          </div>
          <div className="page__content">
            <Feed />
          </div>
        </div>
      </div>
    );
  }
}

export default FeedPage;
