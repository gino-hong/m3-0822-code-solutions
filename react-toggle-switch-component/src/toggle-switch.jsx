import React from 'react';

export default class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isClicked: !this.state.isClicked });
  }

  render() {
    let text = 'OFF';
    let switchStatus = 'switch-off';
    let backgroundStatus = 'background-off';
    if (this.state.isClicked) {
      text = 'ON';
      switchStatus = 'switch-on';
      backgroundStatus = 'background-on';
    }
    return (
      <div className="box">
        <div onClick={this.handleClick} className={`background ${backgroundStatus}`}>
          <div className={`switch ${switchStatus}`}></div>
        </div>
        <div className="label">
          <p>{ text }</p>
        </div>
      </div>
    );
  }
}
