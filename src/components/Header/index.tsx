import * as React from 'react';

import './style.css';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="header__inner">{this.props.children}</div>
      </div>
    );
  }
}

export default Header;
