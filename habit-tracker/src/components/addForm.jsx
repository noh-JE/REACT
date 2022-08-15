import React, { Component } from 'react';

class AddForm extends Component {
    formRef = React.createRef();
    inputRef = React.createRef();

    onSubmit = ( event ) => {
        event.preventDefault();
        const name = this.inputRef.current.value;
        name && this.props.onAdd( name );
        // this.inputRef.current.value = '';
        this.formRef.current.reset();
    };

    render() {
        return (
            <form onSubmit={ this.onSubmit } ref={ this.formRef }>
                <label htmlFor=""></label>
                <input type="text" placeholder="습관 등록하기" ref={ this.inputRef }/>
                <button type="submit">추가하기</button>
            </form>
        );
    }
}

export default AddForm;