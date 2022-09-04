import React from 'react';

export default class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { timesClicked: 0 };
  }

  handleClick() {
    this.setState({ timesClicked: this.state.timesClicked + 1 });
  }

  render() {
    if (this.state.timesClicked >= 18) {
      return (
        <button onClick={this.handleClick} className='white'>
          Hot Button
        </button>
      );
    } else if (this.state.timesClicked >= 15) {
      return (
        <button onClick={this.handleClick} className='yellow'>
          Hot Button
        </button>
      );
    } else if (this.state.timesClicked >= 12) {
      return (
        <button onClick={this.handleClick} className='orange'>
          Hot Button
        </button>
      );
    } else if (this.state.timesClicked >= 9) {
      return (
        <button onClick={this.handleClick} className='red'>
          Hot Button
        </button>
      );
    } else if (this.state.timesClicked >= 6) {
      return (
        <button onClick={this.handleClick} className='purple'>
          Hot Button
        </button>
      );
    } else if (this.state.timesClicked >= 3) {
      return (
        <button onClick={this.handleClick} className='blue'>
          Hot Button
        </button>
      );
    } else {
      return (
      <button onClick={this.handleClick}>
        Hot Button
      </button>
      );
    }

  }
}
