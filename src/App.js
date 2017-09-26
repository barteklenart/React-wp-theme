import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

//componets
import Layout from './layouts/Layout';
import Home from './pages/Home';
import Posts from './layouts/Posts';
import SinglePost from './layouts/SinglePost';

class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Route exact path="/" component={ Home } />
          <Route path="/posts" component={ Posts }>
          </Route>
          <Route path="/post/:postId" component={SinglePost}/>
        </Layout>
      </Router>
    );
  }
}

export default App;
