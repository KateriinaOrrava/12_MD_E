import React from "react";
import { Todo } from "../../../type";
import { Button } from "../../Button/Button";
import styles from "./TodoItem.module.css"

interface TodoOneItemProps {
    todo: Todo;
    checkTodo: (id: Todo['id']) => void;
    deleteTodo: (id: Todo['id']) => void;
}
export const TodoItem: React.FC<TodoOneItemProps> = ({todo, checkTodo, deleteTodo}) => {
    return (
        <div className={styles.todo_item_container}>
            <div>
                <div 
                style={{
                    textDecoration: todo.checked ?'line-through' : 'none', 
                    opacity: todo.checked ? 0.5 : 1}}
                    onClick={() => checkTodo(todo.id)}
                    className={styles.todo_item_title}
                    key={`name${todo.name}`}>
                    {todo.name}
                </div>
                <div 
                style={{
                    opacity: todo.checked ? 0.5 : 1}}
                    className={styles.todo_item_description} key={`id${todo.name}`}>
                    {todo.description}
                </div>
            </div>
            <div className={styles.todo_item_button_container}>
                <Button color='red' onClick={() => deleteTodo(todo.id)}>Delete</Button>
            </div>
        </div>
    )
}