import React from 'react';

class PostList extends React.Component {
    render(){

        const imgAddress =  this.props.post._embedded['wp:featuredmedia'] !== undefined ? this.props.post._embedded['wp:featuredmedia'][0].source_url : '';
        const { post } = this.props;
        return (
            <div className="col-md-6">         
                <div className="card">
                    <img className="card-img-top" src={ imgAddress } alt="Card image cap" />
                    <div className="card-body">
                    <h4 className="card-title">{ post.title.rendered }</h4>
                    <p className="card-text" >{ post.content.rendered.replace( /<\/?[^>]+(>|$)/g, "" ).substr( 0,200 ) }</p>
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default PostList;