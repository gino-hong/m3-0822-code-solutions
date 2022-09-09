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
    let buttonColor = '';
    if (this.state.timesClicked >= 18) {
      buttonColor = 'white';
    } else if (this.state.timesClicked >= 15) {
      buttonColor = 'yellow';
    } else if (this.state.timesClicked >= 12) {
      buttonColor = 'orange';
    } else if (this.state.timesClicked >= 9) {
      buttonColor = 'red';
    } else if (this.state.timesClicked >= 6) {
      buttonColor = 'purple';
    } else if (this.state.timesClicked >= 3) {
      buttonColor = 'blue';
    }
    return (
      <button onClick={this.handleClick} className={buttonColor}>
        Hot Button
      </button>
    );

  }
}
