import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Navs extends React.Component {

    constructor(){
        super();
        this.state = {
            menu: []
        }
    }

    componentDidMount() {
        axios.get( 'http://localhost:8080/reactwp/wp-json/wp-api-menus/v2/menus/2' )
          .then ( response => {
            this.setState( {
              menu: response.data.items
            } )
          } )
          .catch( error => {
            console.log( error );
        } )
    }

    render(){
        const menu = this.state.menu.map( ( menu, key ) => {
            const isActive = menu.url === window.location.pathname ? 'active' : '';

            return <Link key={ key } to={ menu.url } className={ `nav-item nav-link ${ isActive }` } >{ menu.title }</Link>
        } );
        
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        { menu }
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navs;