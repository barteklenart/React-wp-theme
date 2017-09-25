import React, { Component } from 'react';
import axios from 'axios';

//componets
import PostsList from './components/PostsList';

class App extends Component {

  constructor(){
    super();
    this.state = {
      posts: []
    }
  }

  componentDidMount(){
    axios.get( 'http://localhost:8080/reactwp/wp-json/wp/v2/posts' )
      .then ( response => {
        this.setState( {
          posts: response.data
        } )
      } )
      .catch( error => {
        console.log( error );
      } )
  }

  render() {
    console.log( this.state );
    const listOfPost = this.state.posts.map( ( post, key ) => {
      return <PostsList key={ key } post={ post } />
             
    } );

    return (
      <div className="container">
        <div className="row">
          { listOfPost }
        </div>
      </div>
    );
  }
}

export default App;
