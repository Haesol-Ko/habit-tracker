import React, {PureComponent} from 'react';

class Navbar extends PureComponent {
    render() {
        return (
            <nav className="navbar">
                <i className="navbar-logo fa-solid fa-leaf"/>
                <span>Habit Tracker</span>
                <span className="navbar-count">{this.props.habitsCount}</span>
            </nav>
        );
    }
}

export default Navbar;