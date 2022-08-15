import React, { PureComponent } from 'react';


class Habit extends PureComponent {
    componentDidMount() {
        console.log(`habit: ${this.props.habit.name} mounted`);
    }

    componentWillUnmount() {
        console.log(`habit: ${this.props.habit.name} will unmounted`);
    }

    handleIncreament = () => {
        this.props.onIncrement( this.props.habit );
    };

    handleDecreament = () => {
        this.props.onDecrement( this.props.habit );
    };

    handleDelete = () => {
        this.props.onDeletement( this.props.habit );
    };

    render() {
        console.log( 'habit' );
        const { name, count } = this.props.habit;
        // const { count } = this.props;
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