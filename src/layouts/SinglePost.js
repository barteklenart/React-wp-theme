import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

class SinglePost extends React.Component {

    constructor(){
        super();
        this.state = {
          post: []  
        } 
    }

    componentDidMount() {
        const slug =  this.props.match.params.postId;
        axios.get( `http://localhost:8080/reactwp/wp-json/wp/v2/posts?slug=${ slug }&_embed` )
            .then( response => {
                this.setState( {
                    post: response.data
                } )
            } )
            .catch( error => {
                console.log( error );
            } )
    }

    componentWillUnmount(){
        this.setState( {
            post: []
        } )
    }

    render() {
        const { post } = this.state;
        const postContent = post.map( ( post, key ) => {
            const imgAddress =  post._embedded['wp:featuredmedia'] !== undefined ? <img className="card-img-top" src={ post._embedded['wp:featuredmedia'][0].source_url }  alt={ post._embedded['wp:featuredmedia'][0].title.rendered } /> : '';
            return <div className="card" key={ key }>
                    <div className="card-body">
                        { imgAddress }
                        <h4 className="card-title">{ post.title.rendered }</h4>
                        <p className="card-text" >{ post.content.rendered.replace( /<\/?[^>]+(>|$)/g, "" ) }</p>
                    </div>
                </div>
        } );
        
        return (
            <div className="container">
                { postContent }
            </div>
        )
    }
}

export default SinglePost;

SinglePost.PropTypes = {
    slug: PropTypes.string
}