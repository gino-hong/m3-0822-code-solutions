import React from 'react';

export default class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { password: '' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    let message = '';
    let iconClass = 'fa-solid fa-check green';
    if (this.state.password.length < 8) {
      message = 'Your password is too short.';
      iconClass = 'fa-solid fa-xmark red';
    }
    if (this.state.password.length === 0) {
      message = 'A password is required.';
    }
    return (
      <div>
        <h1>Password</h1>
        <input type='password' name='password' value={this.state.password} onChange={this.handleChange}></input>
        <i className={iconClass}></i>
        <p className='red'>{message}</p>
      </div>
    );
  }
}
