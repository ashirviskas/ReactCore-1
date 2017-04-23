import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Container from './components/Container';
import App from './components/App';
import About from './components/About';
import Repository from './components/Repository';
import WizardForm from './components/WizardForm';

import store from './store';

import './styles/main.css';
import './styles/App.css';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Container>
        <Route exact path="/" component={App} />
        <Route path="/about" component={About} />
        <Route path="/repository" component={Repository} />
        <Route path="/start" component={WizardForm} />
      </Container>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
