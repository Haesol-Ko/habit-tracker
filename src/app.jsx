import './app.css';
import Habits from "./components/habits";

import React, {Component} from 'react';
import HabitAddForm from "./components/habitAddForm";
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
        // const habits = [...this.state.habits]; // 배열 전체를 복사.. -> 따라서 내부에 있는 {} 값들은 여전히 같은 참조값을 가진다.
        // console.log(this.state.habits === habits); // false
        // const index = habits.indexOf(habit);
        // habits[index].count++; //이렇게 habits[index] 전체가 아니라 count 값만 올리면 object는 똑같으니까 shallow comparison cannot detect change.
        // console.log(this.state.habits[0] === habits[0]); // true
        /**
         * It gets habit and compares habit with items of habits.
         * If found habit, it remains others but increases count. => accumulated new habits!
         */
        const habits = this.state.habits.map(item => {
            if (item.id === habit.id) {
                return {...habit, count: habit.count + 1}; // 배열 안에 있는 obj를 모두 새로운 obj로 return.. 따라서 habits[0]의 참조값도 새로운 값을 가진다.
            }
            return item;
        })
        // console.log(this.state.habits[0] === habits[0]); // false
        this.setState({habits});
    }

    handleDecrement = (habit) => {
        const habits = this.state.habits.map(item => {
            if ( habit.id === item.id ) {
                const count = habit.count - 1;
                return { ...habit, count: habit.count <= 0 ? 0 : count};
            }
            return item;
        })

        this.setState({ habits });
    }

    handleDelete = (habit) => {
        const habits = this.state.habits.filter((item) => {
            return item.id !== habit.id; // 그냥 item and habit 비교하면 안되나? id로 비교해야하나? .. 깊은 객체일수도 있으니까? => id만 비교하는게 부하가 덜 갈수도 있으려나..?
        });
        this.setState({habits});
    }

    handleAdd = name => {
        const newHabit = {id: Date.now(), name, count: 0};
        const habits = [...this.state.habits, newHabit];
        this.setState({ habits });
    }

    handleReset = () => {
        // const habits = this.state.habits.map(habit => {
        //     habit.count = 0;
        //     return habit;
        // }); // 이 habits는 state.habits랑 참조값 다름. 안에 item들의 참조값은 같음.
        // console.log(habits[0]===this.state.habits[0]); // true

        const habits = this.state.habits.map(habit => {
            if (habit.count !== 0) {
                return {...habit, count: 0};
            }
            return habit;
        });
        console.log(habits[0]===this.state.habits[0]);
        this.setState({habits});
    }

    render() {
        return (
            <>
                <Navbar
                    habitsCount={this.countHabit()}/>
                <Habits
                    habits={this.state.habits}
                    onIncrement={this.handleIncrement}
                    onDecrement={this.handleDecrement}
                    onDelete={this.handleDelete}
                    onAdd={this.handleAdd}
                    onReset={this.handleReset}
                />
            </>
        );
    }
}

export default App;