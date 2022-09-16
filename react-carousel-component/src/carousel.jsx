import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: this.props.images[0].name,
      index: 0
    };
    this.goPrevious = this.goPrevious.bind(this);
    this.goNext = this.goNext.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  goPrevious() {
    if (this.state.index > 0) {
      this.setState({ active: this.props.images[this.state.index - 1].name, index: this.state.index - 1 });
    } else {
      this.setState({ active: this.props.images[this.props.images.length - 1].name, index: this.props.images.length - 1 });
    }
    clearInterval(this.state.start);
    this.setState({ start: setInterval(this.goNext, 3000) });
  }

  goNext() {
    if (this.state.index < this.props.images.length - 1) {
      this.setState({ active: this.props.images[this.state.index + 1].name, index: this.state.index + 1 });
    } else {
      this.setState({ active: this.props.images[0].name, index: 0 });
    }
    clearInterval(this.state.start);
    this.setState({ start: setInterval(this.goNext, 3000) });
  }

  handleClick(e) {
    if (e.target.id !== this.state.index) {
      this.setState({ active: this.props.images[Number(e.target.id)].name, index: Number(e.target.id) });
      clearInterval(this.state.start);
      this.setState({ start: setInterval(this.goNext, 3000) });
    }
  }

  componentDidMount() {
    this.setState({ start: setInterval(this.goNext, 3000) });
  }

  render() {
    const images = this.props.images;
    const gallery = images.map(pic =>
      <div key={pic.name} className={this.state.active === pic.name ? 'active' : 'hidden'}>
        <img src={pic.imageURL} alt={pic.name}></img>
      </div>);
    const dots = images.map((pic, index) =>
      <i key={pic.name} onClick={this.handleClick} id={index} className={this.state.active === pic.name ? 'fa-solid fa-circle fa-lg' : 'fa-regular fa-circle fa-lg'}></i>
    );

    return (
      <div>
        <div className='container'>
          <div className='row'>
            <i className="fa-solid fa-angle-left fa-10x previous" onClick={this.goPrevious}></i>
            {gallery}
            <i className="fa-solid fa-angle-right fa-10x next" onClick={this.goNext}></i>
          </div>
        </div>
        <div className='container'>
          {dots}
        </div>
      </div>
    );
  }
}
