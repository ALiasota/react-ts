import { type } from "@testing-library/user-event/dist/type";
import { FC, useState, FormEvent, ChangeEvent } from "react";

import {IItem} from '../types/todo';

interface IProps {
    addTodo: (todo: IItem) => void;
}
type onlyTitle = Pick<IItem, 'title'>


const AddTodo:FC<IProps> = ({addTodo}) => {
    const [todo, setTodo] = useState<Partial<onlyTitle>>({});

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setTodo({title: e.target.value})
    }

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        if(!todo.title) {
            return
        }
        addTodo({
            id: Math.random().toString(),
            title: todo.title
        })
    }
    return(
        <form onSubmit={handleSubmit}>
            <div>
                <span>Add title</span>
                <input type="text" id="add-todo" onChange={handleChange}/>
            </div>
            <button type="submit">Add Todo</button>
        </form>
    )
}

export default AddTodo;