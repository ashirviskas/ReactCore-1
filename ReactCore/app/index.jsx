import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Container from './components/Container';
import App from './components/App';
import About from './components/About';
import Repository from './components/Repository';

import './styles/main.css';
import './styles/App.css';

ReactDOM.render(
  <Router>
    <Container>
      <Route exact path="/" component={App} />
      <Route path="/about" component={About} />
      <Route path="/repository" component={Repository} />
    </Container>
  </Router>,
  document.getElementById('root'),
);
