import React, {Component} from 'react';

class InputBar extends Component {
    handleAdd = () => {
        const input = document.querySelector('.input-bar__input');
        this.props.onAdd(input.value);
    }

    render() {
        return (
            <div className="input-bar">
                <input
                className="input-bar__input"
                placeholder="Habit"/>
                <button
                    className="input-bar__add-button"
                onClick={this.handleAdd}>Add</button>
            </div>
        );
    }
}

export default InputBar;