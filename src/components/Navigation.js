import React from 'react';
import {Link} from 'react-router-dom';
import "./Navigation.css";
function Navigation(){
    return (
        <div className="navigation">
            <Link className="navigation__link" to="/">Home</Link>
            <Link className="navigation__link" to={{
                pathname:"/about",
                state:{fromNavigation: true}
            }}>About</Link>
        </div>
    );
}
export default Navigation;