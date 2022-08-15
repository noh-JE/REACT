import React, { Component } from 'react';


class Habit extends Component {
    handleIncreament = (  ) => {
        this.props.onIncrement(this.props.habit);
    };

    handleDecreament = (  ) => {
        this.props.onDecrement(this.props.habit);
    };

    handleDelete = (  ) => {
        this.props.onDeletement(this.props.habit);
    };

    render() {
        const { name, count } = this.props.habit;
        return (
            <li>
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
            </li>
        );
    }
}

export default Habit;