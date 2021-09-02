import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Animation from './animIntro';
import IntroPortfolio from './introPortfolio';

ReactDOM.render(
  <React.StrictMode>
    <Animation/>
    <IntroPortfolio/>
  </React.StrictMode>,
  document.getElementById('root')
);

