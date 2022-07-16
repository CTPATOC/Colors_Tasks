import React from 'react';
import './TodoFilter.css';

const TodoFilter = (props) => {
    const statusChangeHandler = (event) => {
        props.onChangeStatus(event.target.value);
    };

    return (
        <div className='todos-filter'>
            <div className='todos-filter__control'>
                <label>Вибір за готовністю</label>
                <select value={props.filteredStatus} onChange={statusChangeHandler}>
                    <option value="all">Усі завдання</option>
                    <option value={true}>Виконані</option>
                    <option value={false}>Активні</option>
                </select>
            </div>
        </div>
    );
};

export default TodoFilter;