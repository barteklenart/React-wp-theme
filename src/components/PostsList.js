import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class PostList extends React.Component {
    render() {
        const { post } = this.props;
        const imgAddress =  post._embedded['wp:featuredmedia'] !== undefined ? <img className="card-img-top" src={ post._embedded['wp:featuredmedia'][0].source_url }  alt={ post._embedded['wp:featuredmedia'][0].title.rendered } /> : '';
        return (
            <div className="col-md-6">         
                <div className="card">
                    { imgAddress }
                    <div className="card-body">
                    <h4 className="card-title">{ post.title.rendered }</h4>
                    <p className="card-text" >{ post.content.rendered.replace( /<\/?[^>]+(>|$)/g, "" ).substr( 0,200 ) }</p>
                    <Link to={ `post/${ post.slug }` } className="btn btn-primary">Go somewhere</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default PostList;

PostList.propTypes = {
    post: PropTypes.object
}