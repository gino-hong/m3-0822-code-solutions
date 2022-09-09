import React from 'react';

export default class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOn: false, timer: 0 };
    this.handleClick = this.handleClick.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleClick() {
    if (!this.state.isOn) {
      this.myInterval = setInterval(
        () => this.setState(
          { isOn: true, timer: this.state.timer + 1 }
        ), 1000);
    } else {
      this.setState({ isOn: false });
      clearInterval(this.myInterval);
    }
  }

  handleReset() {
    if (!this.state.isOn) {
      this.setState({ timer: 0 });
    }
  }

  render() {
    let icon = 'fa-solid fa-play';
    if (this.state.isOn) {
      icon = 'fa-solid fa-pause';
    }
    return (
      <div>
        <div className='face' onClick={this.handleReset}>
          <div className='time'>{this.state.timer}</div>
        </div>
        <div className='btn'>
          <i onClick={this.handleClick} className={icon}></i>
        </div>
      </div>
    );
  }
}
