import React, {Component} from 'react';
import logo from '../logo.svg';
import {NavLink} from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <header>
                <div className="container h-flex">
                    <a href="#" className='logo'>
                        <img src={logo} alt="logo"/>
                    </a>
                    <nav className="links">
                        <ul>
                            <li>
                                <a href="#" className="menu__links">
                                    <NavLink exact to="/" activeClassName="active">Feed</NavLink>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="menu__links">
                                    <NavLink exact to="/profile" activeClassName="active">Profile</NavLink>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}

export default Header;
