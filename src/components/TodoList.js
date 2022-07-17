import React, { useEffect, useState } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';
import TodoFilter from './TodoFilter';

const TodoList = (props) => {
    const [todos, setTodos] = useState(() => {
        const temp = localStorage.getItem('todos')
        console.log(temp);
        const loadedTodos = JSON.parse(temp)
        return loadedTodos || []
    })
    const [status, setStatus] = useState('all');
    
    useEffect(() => {
        const temp = JSON.stringify(todos)
        localStorage.setItem('todos', temp)
    }, [todos])

    const onChangeStatus = (event) => {
        setStatus(event.target.value === 'all' ? 'all' : event.target.value === 'true');
    };

    const filteredTodo = status == 'all' ? todos : todos.filter(todo => todo.status === status)

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
        let newTodos = [...todos].map((todo) => {
            if (todo.id === id)
            {
                todo.status = !todo.status
            }
            return todo;
        });
        setTodos(newTodos);
    };


    return (
        <div>
            <h1>Які пригоди на сьогодні?</h1>
            <TodoForm onSubmit={addTodo} />
            <TodoFilter status={status} onChangeStatus={onChangeStatus} />
            <Todo todos={filteredTodo} completeTodo={completeTodo} removeTodo={removeTodo}
                updateTodo={updateTodo} />
        </div>
    );
};

export default TodoList;