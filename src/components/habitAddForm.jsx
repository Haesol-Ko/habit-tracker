// import React, {PureComponent} from 'react';
import React, {memo} from 'react';

// function component version. It doesn't need 'this'
const HabitAddForm = memo((props) => {
    const formRef = React.createRef();
    const inputRef = React.createRef();

    const onSubmit = event => {
        event.preventDefault();
        const name = inputRef.current.value;
        name && props.onAdd(name);
        formRef.current.reset();
    };

    return (
        <form ref={formRef} className="add-form" onSubmit={onSubmit}>
            <input
                ref={inputRef}
                type="text"
                className="add-input"
                placeholder="Habit"
            />
            <button className="add-button">Add</button>
        </form>
    );
});

export default HabitAddForm;


// class component version
/**
 * How PureComponent works:
 * check shouldComponentUpdate()
 * this method does shallow Comparison.
 * (it means comparing reference :
 * Even if references are same but content, they are considered same.)
 * props가 변경되어도 동일한 오브젝트면 얕은비교 했을 때 두개는 차이가 없으므로 update 하지 않음.
 */
// class HabitAddForm extends PureComponent {
//     formRef = React.createRef();
//     inputRef = React.createRef();
//
//     onSubmit = event => {
//         event.preventDefault();
//         const name = this.inputRef.current.value;
//         name && this.props.onAdd(name);
//         // this.inputRef.current.value = '';
//         this.formRef.current.reset();
//     }
//
//     render() {
//         console.log('habitAddform redner');
//         return (
//             <form ref={this.formRef} className="add-form" onSubmit={this.onSubmit}>
//                 <input
//                     ref={this.inputRef}
//                     type="text"
//                     className="add-input"
//                     placeholder="Habit"
//                 />
//                 <button className="add-button">Add</button>
//             </form>
//         );
//     }
// }
//
// export default HabitAddForm;