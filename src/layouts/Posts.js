import React from 'react';
import axios from 'axios';

import PostsList from '../components/PostsList';

class Posts extends React.Component {

    constructor() {
        super();
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        axios.get( 'http://localhost:8080/reactwp/wp-json/wp/v2/posts?_embed' )
          .then ( response => {
            this.setState( {
              posts: response.data
            } )
          } )
          .catch( error => {
            console.log( error );
        } )
    }

    componentWillUnmount() {
        this.setState( {
            post: []
        } )
    }

    render(){
        const listOfPost = this.state.posts.map( ( post, key ) => {
            return <PostsList key={ key } post={ post } />
        } );

        return (
            <div className="container">
                <div className="row">
                    { listOfPost }
                </div>
            </div>            
        )
    }
}

export default Posts;