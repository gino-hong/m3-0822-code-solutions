import React from 'react';
import ReactDOM from 'react-dom/client';
import Carousel from './carousel';

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

const images = [
  { name: 'Bulbasaur', imageURL: '../images/001.png' },
  { name: 'Charmander', imageURL: '../images/004.png' },
  { name: 'Squirtle', imageURL: '../images/007.png' },
  { name: 'Pikachu', imageURL: '../images/025.png' },
  { name: 'Jigglypuff', imageURL: '../images/039.png' }
];

root.render(<Carousel images={images} />);
