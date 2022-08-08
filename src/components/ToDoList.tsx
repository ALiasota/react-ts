// import { Component } from "react";
import { FC } from "react";
import {IItem} from '../types/todo'

interface IProps {
    todos: IItem[];
    delTodo: (id:string) => void;
}

const ToDoList: FC<IProps> = ({todos, delTodo})=>{
    return(
        <ul>
            {todos.map(item => {
                return(
                    <li key={item.id}>
                        {item.title}
                        <button type="button" onClick={delTodo.bind(this, item.id)}>Del</button>
                    </li>
                )
            })}
        </ul>
    )
}

// class ToDoList extends Component<IProps> {
//     render() {
//        return null 
//     }
// }

export default ToDoList;