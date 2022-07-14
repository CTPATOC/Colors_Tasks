import React, { useState, useEffect, useRef, Fragment } from 'react';

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus()
    });

    const handleChange = (event) => {
        setInput(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input,
        });

        setInput('');
    };

    return (
        <form className='todo-form' onSubmit={handleSubmit}>
            {props.edit ? (
                <Fragment>
                    <input
                        type='text'
                        placeholder='Змінюйте завдання'
                        value={input}
                        name='text'
                        className='todo-input edit'
                        onChange={handleChange}
                        ref={inputRef}
                    />
                    <button className='todo-button edit'>Оновити
                    </button>
                </Fragment>
            ) : (
                    <Fragment>
                        <input
                            type='text'
                            placeholder='Додайте завданнячко'
                            value={input}
                            name='text'
                            className='todo-input'
                            onChange={handleChange}
                            ref={inputRef}
                        />
                            <button className='todo-button'>Додати завданнячко</button>
                    </Fragment>
                ) 
                }
        </form>
    );
}

export default TodoForm