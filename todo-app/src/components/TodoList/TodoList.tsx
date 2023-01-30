import React from "react";
import styles from './TodoList.module.css';
import { Todo } from "../../type";
import { TodoItem } from "./TodoListOneItem/TodoItem";

// tiks izveidots masīvs ar atsevišķiem elementiem, kas atbilst importētam tipam - Todo
interface TodoListProps {
    todos: Todo[];
    checkTodo: (id: Todo['id']) => void;
    deleteTodo: (id: Todo['id']) => void;
}

export const TodoList: React.FC<TodoListProps> = ({ todos, checkTodo, deleteTodo }) => {
    return (
        <div>
            {todos.map((todo) => (
                <TodoItem todo={todo} checkTodo={checkTodo} deleteTodo={deleteTodo}/>
            ))}
        </div>
    )
}
