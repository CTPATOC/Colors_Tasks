import React, { useState } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';
import TodoFilter from './TodoFilter';

const TodoList = (props) => {
    const [todos, setTodos] = useState([]);
    const [filteredStatus, setFilteredStatus] = useState(false);

    const statusChangeHandler = (status) => {
        setFilteredStatus(status);
    };

    const filteredTodo = [...todos].filter(todo => {
        return todo.status === filteredStatus;
    });

    // const filteredTodo = (status) => { 
    //     if (status === 'all')
    //     {
    //         setFilteredStatus(todos);
    //     } else
    //     {
    //         let newTodos = [...todos].filter(todo => todo.status === status);
    //         setFilteredStatus(newTodos);
    //     }
    // };

    const addTodo = (todo) => {
        if (!todo.text || /^\s*$/.test(todo.text))
        {
            return;
        }
        
        const newTodos = [todo, ...todos];

        setTodos(newTodos);
    };

    const updateTodo = (todoId, newValue) => { 
        if (!newValue.text || /^\s*$/.test(newValue.text))
        {
            return;
        }

        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
    };

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id)

        setTodos(removeArr);
    };

    const completeTodo = id => {
        let newTodos = [...todos].filter(todo => {
            if (todo.id === id)
            {
                
                todo.status = !todo.status
            }
            return todo;
        });
        setTodos(newTodos);
    };

    console.log(todos);

    return (
        <div>
            <h1>Які пригоди на сьогодні?</h1>
            <TodoForm onSubmit={addTodo} />
            <TodoFilter status={filteredStatus} onChangeStatus={statusChangeHandler} />
            <Todo todos={filteredTodo} completeTodo={completeTodo} removeTodo={removeTodo}
                updateTodo={updateTodo} />
        </div>
    );
};

export default TodoList;