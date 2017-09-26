import React from 'react';

class Layout extends React.Component {

    render(){
        return (
            <div>
                <nav>
                <ul className="nav">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Active</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#">Disabled</a>
                    </li>
                    </ul>
                </nav>
                { this.props.children }
            </div>
        )
    }
}

export default Layout;  
