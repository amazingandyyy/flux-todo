import React, {Component} from 'react';
import { Link } from 'react-router';

class DashBoard extends Component {
    render() {
        return (
            <nav>
                <h1>To Do App</h1>
                <ul className="nav nav-pills text-center">
                    <li role="presentation">
                        <Link to="/">Home</Link>
                    </li>
                    <li role="presentation">
                        <Link to="todo">TodoApp</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}
export default NavBar;
