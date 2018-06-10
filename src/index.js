import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';

//Surround <App /> with a Router, see the code below: 
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
