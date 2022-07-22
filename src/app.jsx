import './app.css';
import Habits from "./components/habits";

import React, {Component} from 'react';
import InputBar from "./components/inputBar";
import Navbar from "./components/navbar";
import habits from "./components/habits";

class App extends Component {
    state = {
        habits: [
            {id: 1, name: 'Reading', count: 0},
            {id: 2, name: 'Running', count: 0},
            {id: 3, name: 'Coding', count: 0},
        ],
    };

    countHabit = () => {
        const count = this.state.habits.filter(habit => habit.count >= 1);
        return count.length;
    }

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

    handleAdd = (inputValue) => {
        const newId = this.state.habits.reduce((prev, curr) => {
            return Math.max(prev.id, curr.id);
        }, 1) + 1;
        const arr =[1,5,2,6];
        const max = arr.reduce(
            (acc, curr) => Math.max(acc.id, curr.id)
        , 1);
        alert(max);
        const newHabit = {id: newId, name: inputValue, count: 0};
        const habits = [...this.state.habits, newHabit];
        this.setState({habits});
    }

    render() {
        return (
            <>
                <Navbar
                    habitsCount={this.countHabit()}/>
                <InputBar
                    onAdd={this.handleAdd}
                />
                <Habits
                    habits={this.state.habits}
                    onIncrement={this.handleIncrement}
                    onDecrement={this.handleDecrement}
                    onDelete={this.handleDelete}
                />
            </>
        );
    }
}

export default App;