import './app.css';
import Habits from "./components/habits";

import React, {Component} from 'react';
import InputBar from "./components/inputBar";
import NavBar from "./components/navBar";

class App extends Component {
    state = {
        habits: [
            {id: 1, name: 'Reading', count: 0},
            {id: 2, name: 'Running', count: 0},
            {id: 3, name: 'Coding', count: 0},
        ],
    };

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
        <>
          <NavBar />
          <InputBar />
          <Habits
          habits={this.state.habits}
          />
        </>
    );
  }
}

export default App;