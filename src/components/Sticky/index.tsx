import * as React from 'react';

const cx = require('classnames/bind').bind(require('./style.css'));

interface IProps {
  children: React.ReactChild;
  className?: string;
}

interface IState {
  isActive: boolean;
}

class Sticky extends React.PureComponent<IProps, IState> {
  relativeChildrenRef: HTMLDivElement | any = null;

  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
    };
  }

  setRelativeChildrenRef = (ref: HTMLDivElement) => (this.relativeChildrenRef = ref);

  componentDidMount() {
    window.addEventListener('resize', this.updateSticky);
    window.addEventListener('scroll', this.updateSticky);
    typeof window !== 'undefined' && this.updateSticky();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateSticky);
    window.removeEventListener('scroll', this.updateSticky);
  }

  updateSticky = () => {
      console.log('update sticky');
      
    const bounding = this.relativeChildrenRef.getBoundingClientRect();
    console.log(bounding.top);
    console.log(window.innerHeight);
    // const isActive = window.innerHeight < bounding.top + 58;
    const isActive = bounding.top < 0;
    if (this.state.isActive && !isActive) {
      this.setState({ isActive: false });
    } else if (!this.state.isActive && isActive) {
      this.setState({ isActive: true });
    }
  };

  render() {
    const { children, className } = this.props;
    const { isActive } = this.state;

    return (
      <div className={cx(className, 'sticky')}>
        <div
          className={cx({
            sticky__container: true,
            sticky__container_active: isActive,
          })}
        >
          {children}
        </div>
        <div ref={this.setRelativeChildrenRef} />
      </div>
    );
  }
}

export default Sticky;
