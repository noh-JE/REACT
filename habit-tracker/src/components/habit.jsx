import React, { Component } from 'react';


class Habit extends Component {
    state = {
        count: 0,
    };

    handleIncreament = () => {
        this.props.onIncrement(this.props.habit);
        // this.setState( { count: this.state.count + 1 } );

    };

    handleDecreament = () => {
        this.props.onDecrement(this.props.habit);
        // const count = this.state.count - 1;
        // this.setState( { count: count < 0 ? 0 : count } );
    };

    handleDelete = () => {
        this.props.onDeletement(this.props.habit);
        // this.setState( { count: 0 } );
    };

    render() {
        const { name, count } = this.props.habit;
        return (
            <>
                <span className="habit-name">{ name }</span>
                <span className="habit-counting">{ count }</span>
                <button className="habit-button habit-increase"
                        onClick={ this.handleIncreament }>
                    <i className="fa-solid fa-square-plus"></i>
                </button>
                <button className="habit-button habit-decrease"
                        onClick={ this.handleDecreament }>
                    <i className="fa-solid fa-square-minus"></i>
                </button>
                <button className="habit-button habit-delete"
                        onClick={ this.handleDelete }>
                    <i className="fa-solid fa-trash"></i>
                </button>
            </>
        );
    }
}

export default Habit;