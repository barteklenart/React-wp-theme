import React from 'react';
import PropTypes from 'prop-types';

import Navs from '../components/Navs';

class Layout extends React.Component {
    render() {
        return (
            <div>
                <Navs />
                { this.props.children }
            </div>
        )
    }
}

export default Layout;  

Layout.PropTypes = {
    children: PropTypes.object
}
