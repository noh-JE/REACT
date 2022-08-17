import React, { memo } from 'react';

const AddForm = memo((props) => {
    const formRef = React.createRef();
    const inputRef = React.createRef();

    const onSubmit = ( event ) => {
        event.preventDefault();
        const name = inputRef.current.value;
        name && props.onAdd( name );
        formRef.current.reset();
    };


    return (
        <form onSubmit={ onSubmit } ref={ formRef }>
            <label htmlFor=""></label>
            <input type="text" placeholder="습관 등록하기" ref={ inputRef }/>
            <button type="submit">추가하기</button>
        </form>
    );
});

export default AddForm;
