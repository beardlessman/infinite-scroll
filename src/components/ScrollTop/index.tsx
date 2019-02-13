import * as React from 'react';

const cx = require('classnames/bind');
import './style.css';

interface IState {
  isShown: boolean;
}

class ScrollTop extends React.Component<{}, IState> {
  static MIN_OFFSET_TO_SHOW = 400;

  constructor(props) {
    super(props);

    this.state = {
      isShown: false
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scrollHandler);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollHandler);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      this.state.isShown !== nextState.isShown
    );
  }

  scrollHandler = () => {
    this.setState({ isShown: window.pageYOffset > ScrollTop.MIN_OFFSET_TO_SHOW });
  };

  scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  render() {
    return (
      <button
        title="Наверх"
        className={cx({
          scrolltop: true,
          scrolltop_shown: this.state.isShown
        })}
        onClick={this.scrollToTop}
      />
    );
  }
}

export default ScrollTop;
