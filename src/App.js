import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

//componets
import Layout from './layouts/Layout';
import Home from './pages/Home';
import Posts from './layouts/Posts';

class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Route exact path="/" component={ Home } />
          <Route path="/posts" component={ Posts } />
        </Layout>
      </Router>
    );
  }
}

export default App;
