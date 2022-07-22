import React, {Component} from 'react';

class Habit extends Component {
    render() {
        const { name, count } = this.props.habit;
        const { onIncrement, onDecrement, onDelete } = this.props;
        return (
            <li className="habit">
                <span className="habit-name">{name}</span>
                <span className="habit-count">{count}</span>
                <button
                    className="habit-button habit-increase"
                    onClick={this.props.onIncrement}>
                    <i className="fa-solid fa-square-plus"></i>
                </button>
                <button
                    className="habit-button habit-decrease"
                    onClick={this.props.onDecrement}>
                    <i className="fa-solid fa-square-minus"></i>
                </button>
                <button
                    className="habit-button habit-delete"
                    onClick={this.props.onDelete}>
                    <i className="fa-solid fa-trash-can"></i>
                </button>
            </li>
        );
    }
}

export default Habit;