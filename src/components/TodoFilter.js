import React from 'react';

function TodoFilter(props) {
    return (
        <select className=''>
            <option selected value="all">Усі завдання</option>
            <option value={true}>Виконані</option>
            <option value="false">Активні</option>
        </select>
    );
};

export default TodoFilter;