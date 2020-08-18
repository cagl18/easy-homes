import React, { Component } from 'react';

class banner extends Component {
  constructor(args) {
    super(args);
    this.state = { visible: false };
    this.hideTimeout = null;
  }

  componentDidUpdate(prevProps, _) {
    if (this.props.children && !prevProps.children) {
      this.setVisibleInterval();
    }
  }

  setVisibleInterval() {
    this.setState({ visible: true });
    this.hideTimeout = setTimeout(
      () => this.setState({ visible: false }),
      2500
    );
  }
  renderContent() {
    const { success, error, children } = this.props;
    const status = !success || error ? 'error' : 'success';
    return children?.length && this.state.visible ? (
      <div className={`banner ${status}`}>
        <div className="banner__content">
          <div className="messageBox">{children}</div>
        </div>
      </div>
    ) : null;
  }

  componentWillUnmount() {
    clearTimeout(this.hideTimeout);
  }

  render() {
    return this.state.visible ? this.renderContent() : null;
  }
}

export default banner;
