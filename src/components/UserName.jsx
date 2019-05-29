import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class UserName extends Component {
    render() {
        return (
            <NavLink exact to="/profile" activeClassName="active" className={this.props.min ? 'user min' : 'user'}>
                <img src={this.props.src} alt={this.props.alt}/>
                <div>{this.props.name}</div>
            </NavLink>
        )
    }
}

export default UserName;
