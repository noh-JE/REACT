import react, { Component } from 'react';

class Header extends Component {
    render() {
        console.log('header');
        return (
            <header>
                <h1>Habit Tracker -React-</h1>
                <p>습관 개수 <span>{ this.props.totalCount }</span></p>
            </header>
        );
    }
}

export default Header;