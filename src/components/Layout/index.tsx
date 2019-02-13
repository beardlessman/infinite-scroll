import * as React from 'react';

import Header from '../../components/Header';
import ScrollTop from '../../components/ScrollTop';

import './style.css';

class Layout extends React.Component {
  render() {
    return (
      <div className="layout">
        <div className="layout__header">
          <Header>Infinite scroll demo</Header>
        </div>
        <div className="layout__content">
          <div className="layout__inner">{this.props.children}</div>
        </div>
        <ScrollTop />
      </div>
    );
  }
}

export default Layout;
