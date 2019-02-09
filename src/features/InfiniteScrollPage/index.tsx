import * as React from 'react';
import Panel from '../../components/Panel';

import './style.css';

class InfiniteScrollPage extends React.Component {
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
          <div className="page__content">Лента</div>
        </div>
      </div>
    );
  }
}

export default InfiniteScrollPage;
