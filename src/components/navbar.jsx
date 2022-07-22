import React, {Component} from 'react';

class NavBar extends Component {
    render() {
        return (
            <div>
                <i className="fa-solid fa-leaf"></i>
                Habit Tracker {this.props.count}
            </div>
        );
    }
}

export default NavBar;