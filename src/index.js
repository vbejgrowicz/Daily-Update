/*jshint esversion:6*/
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import './Style/index.css';
import App from './App/App';

ReactDOM.render(
  <HashRouter><App /></HashRouter>,
  document.getElementById('root')
);
