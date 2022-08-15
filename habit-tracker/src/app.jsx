import React, { Component } from 'react';
import Header from './components/header';
import Habits from './components/habits';
import './app.css';


class App extends Component {
    // data를 가지고 있는 곳이 내가 data를 어떻게 처리할 수 있는지 잘 알 수 있는 공간이다.
    state = {
        habits: [
            { id: 1, name: '독서', count: 0 },
            { id: 2, name: '드라마', count: 0 },
            { id: 3, name: '영화', count: 0 },
        ]
    };

    handleIncreament = ( habit ) => {
        const habits = this.state.habits.map( ( item ) => {
            if( item.id === habit.id ) {
                return { ...habit, count: habit.count + 1 };
            }
            return item;
        } );
        this.setState( { habits } );
    };

    handleDecreament = ( habit ) => {
        const habits = this.state.habits.map( ( item ) => {
            if( item.id === habit.id ) {
                const count = habit.count - 1;
                return { ...habit, count: count < 0 ? 0 : habit.count - 1 };
            }
            return item;
        } );
        this.setState( { habits } );
    };

    handleDelete = ( habit ) => {
        const habits = this.state.habits.filter( item => item.id !== habit.id );
        this.setState( { habits } );
    };
    handleAdd = ( name ) => {
        const habits = [...this.state.habits, { id: Date.now(), name, count: 0 }];
        this.setState( { habits } );
    };
    handleRest = () => {
        const habits = this.state.habits.map( habit => {
            if(habit.count !== 0) {
                return { ...habit, count: 0 };
            }
            return habit;

        } );
        this.setState( { habits } );
    };

    render() {
        console.log( 'app' );
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
    }
}

export default App;
