import React from 'react';

import Navs from '../components/Navs';

class Layout extends React.Component {
    render(){
        return (
            <div>
                <Navs />                
                { this.props.children }
            </div>
        )
    }
}

export default Layout;  
