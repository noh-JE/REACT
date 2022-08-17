import React, { useRef, useState, useCallback, useEffect } from 'react';

const SimpleHabit = ( props ) => {
    const [count, setCount] = useState( 0 );
    const spanRef = useRef();

    const handleIncrement = useCallback(() => {
        setCount( count + 1 );
    });

    useEffect(() => {
        console.log('useEffect');
    }, []);

    return (
        <li>
            <span ref={spanRef}>독서</span>
            <span>{ count }</span>
            <button onClick={ handleIncrement }>증가</button>
        </li>
    );
};

export default SimpleHabit;
