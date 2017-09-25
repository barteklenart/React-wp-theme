import React from 'react';

class PostList extends React.Component {
    render(){
        console.log( this.props );
        const { post } = this.props;
        return (
            <div className="col-md-6">         
                <div className="card">
                    <img className="card-img-top" src="..." alt="Card image cap" />
                    <div className="card-body">
                    <h4 className="card-title">{ post.title.rendered }</h4>
                    <p className="card-text" >{ post.content.rendered.replace(/<\/?[^>]+(>|$)/g, "") }</p>
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default PostList;