import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavigationBar extends Component {
    render() {
        return (
            <nav>
                <ul id="headerButtons">
                    <li className="navButton"><Link to="">Home</Link></li>
                </ul>
            </nav>
        )
    }
}
export default NavigationBar;