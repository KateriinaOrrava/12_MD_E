import React from "react";
import { Todo } from "../../type";
import { Button } from "../Button/Button";
import styles from './TodoKeeper.module.css';

const DEFAULT_TODO ={
    name: '', 
    description: ''
};

interface TodoKeeperProps{
    addTodo: ({name, description}: Omit<Todo, 'checked' | 'id'>) => void
};

export const TodoKeeper: React.FC<TodoKeeperProps> = ({addTodo}) => {
    const [todo, setTodo] =React.useState(DEFAULT_TODO);

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setTodo({ ...todo, [name]:value });
    }

    //funkcija dzēš ārā informāciju, kuru mēs tikko ievadījām
    const onClick =() => {
        addTodo({name: todo.name, description: todo.description});
        setTodo(DEFAULT_TODO);
    }

    return (
        <div className={styles.todo_panel_container}>
            <div className={styles.fields_container}>
                <div className={styles.field_container}>
                    <label htmlFor="name">
                        <div className="">name</div>
                        <input type="text" id='name' value={todo.name} name='name' onChange={onChange} placeholder='Add Task Name'/>
                    </label>
                </div>
                <div className={styles.field_container}>
                    <label htmlFor="description">
                        <div>description</div>
                        <input type="text" id='description' value={todo.description} name='description' onChange={onChange} placeholder='Add Task Description'/>
                    </label>
                </div>
            </div>
            <div className={styles.button_container}>
                <Button color='green' key='name' onClick={onClick} > 
                    ADD
                </Button>
            </div>
        </div>
        )
}
