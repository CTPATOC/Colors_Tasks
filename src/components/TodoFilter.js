import React from 'react';
import './TodoFilter.css';

const TodoFilter = (props, {status, statusChangeHandler}) => {

    return (
        <div className='todos-filter'>
            <div className='todos-filter__control'>
                <label>Вибір за готовністю</label>
                <select value={status} onChange={statusChangeHandler}>
                    <option value='all'>Усі завдання</option>
                    <option value={(true)}>Виконані</option>
                    <option value={(false)}>Активні</option>
                </select>
            </div>
        </div>
    );
};

export default TodoFilter;