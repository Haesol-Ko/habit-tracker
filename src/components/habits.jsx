import React, {Component} from 'react';
import Habit from "./habit";
import HabitAddForm from "./habitAddForm";

class Habits extends Component { // PureComponent로 해도 똑같이 전체가 계속 업데이트 됨.(리스트를 업데이트하니깐?)

    render() {
        const { onIncrement, onDecrement, onDelete } = this.props;
        return (
            <>
                <HabitAddForm
                    onAdd={this.props.onAdd}/>
                <ul>
                    {this.props.habits.map(habit => (
                            <Habit
                                key={habit.id}
                                habit={habit}
                                onIncrement={this.props.onIncrement}
                                onDecrement={this.props.onDecrement}
                                onDelete={this.props.onDelete}
                            />
                        )
                    )}
                </ul>
                <button className="habits-reset" onClick={this.props.onReset}>Reset All</button>
            </>
        );
    }
}

export default Habits;