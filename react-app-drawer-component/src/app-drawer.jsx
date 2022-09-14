import React from 'react';

export default class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    let menu = 'hidden';
    if (this.state.isOpen) {
      menu = '';
    }
    return (
      <div>
        <div onClick={this.handleClick}>
          <i className="fa-solid fa-bars"></i>
        </div>
        <div className={menu}>
          <div className='overlay' onClick={this.handleClick}></div>
          <div className='modal'>
            <h1 onClick={this.handleClick}>Menu</h1>
            <h2 onClick={this.handleClick}>About</h2>
            <h2 onClick={this.handleClick}>Get Started</h2>
            <h2 onClick={this.handleClick}>Sign In</h2>
          </div>
        </div>
      </div>
    );
  }
}
