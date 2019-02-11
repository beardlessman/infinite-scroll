import * as React from 'react';

const cx = require('classnames/bind').bind(require('./style.css'));

interface IProps {
  className?: string;
}

class Loader extends React.PureComponent<IProps> {
  render() {
    return (
      <div className={cx(this.props.className, 'loader')}>
        <div className={cx('loader__content')} />
      </div>
    );
  }
}

export default Loader;
