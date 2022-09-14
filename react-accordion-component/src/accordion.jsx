import React from 'react';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { revealed: '' };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (this.state.revealed === e.target.id) {
      this.setState({ revealed: '' });
    } else {
      this.setState({ revealed: e.target.id });
    }
  }

  render() {
    const list = this.props.list;
    return (
      list.map(topic =>
        <div key={topic.name}>
          <h2 onClick={this.handleClick} id={topic.name}>{topic.name}</h2>
          <p className={this.state.revealed === topic.name ? '' : 'hidden'}>{topic.details}</p>
        </div>
      )
    );
  }
}
