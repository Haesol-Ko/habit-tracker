import React, {Component} from 'react';
import Habit from "./habit";

class Habits extends Component {
    handleIncrement = (habit) => {
        const habits = [...this.state.habits];
        const index = habits.indexOf(habit);
        habits[index].count++;
        this.setState({habits});
    }

    handleDecrement = (habit) => {
        const habits = [...this.state.habits];
        const index = habits.indexOf(habit);
        habits[index].count = habits[index].count === 0 ? 0 : habits[index].count - 1 // 💩
        this.setState({ habits });
    }

    handleDelete = (habit) => {
        const habits = this.state.habits.filter((item) => {
            return item.id !== habit.id; // 그냥 item and habit 비교하면 안되나? id로 비교해야하나? .. 깊은 객체일수도 있으니까?
        });
        this.setState({habits});
    }

    render() {
        return (
            <ul>
                {this.props.habits.map(habit => (
                    <Habit
                        key={habit.id}
                        habit={habit}
                        onIncrement={this.handleIncrement}
                        onDecrement={this.handleDecrement}
                        onDelete={this.handleDelete}/>
                    )
                )}
            </ul>
        );
    }
}

export default Habits;