import React from 'react';
import Header from './components/header';
import Habits from './components/habits';
import './app.css';


state = {
    habits: [
        { id: 1, name: '독서', count: 0 },
        { id: 2, name: '드라마', count: 0 },
        { id: 3, name: '영화', count: 0 },
    ]
};

const handleIncreament = ( habit ) => {
    const habits = this.state.habits.map( ( item ) => {
        if( item.id === habit.id ) {
            return { ...habit, count: habit.count + 1 };
        }
        return item;
    } );
    this.setState( { habits } );
};

const handleDecreament = ( habit ) => {
    const habits = this.state.habits.map( ( item ) => {
        if( item.id === habit.id ) {
            const count = habit.count - 1;
            return { ...habit, count: count < 0 ? 0 : habit.count - 1 };
        }
        return item;
    } );
    this.setState( { habits } );
};

const handleDelete = ( habit ) => {
    const habits = this.state.habits.filter( item => item.id !== habit.id );
    this.setState( { habits } );
};
const handleAdd = ( name ) => {
    const habits = [...this.state.habits, { id: Date.now(), name, count: 0 }];
    this.setState( { habits } );
};
const handleRest = () => {
    const habits = this.state.habits.map( habit => {
        if( habit.count !== 0 ) {
            return { ...habit, count: 0 };
        }
        return habit;

    } );
    this.setState( { habits } );
};

const App = () => {
    return (
        <React.Fragment>
            <Header totalCount={ this.state.habits.filter( item => item.count > 0 ).length }/>
            <Habits
                habits={ this.state.habits }
                onIncrement={ this.handleIncreament }
                onDecrement={ this.handleDecreament }
                onDeletement={ this.handleDelete }
                onAdd={ this.handleAdd }
                onReset={ this.handleRest }
            />
        </React.Fragment>
    );
};

export default App;