import React from 'react';
import {TodoItem} from './TodoItem';

export const Todos = (props) => {
    let myStyle = {
        minHeight: "70vh"
    }
    return (
        <div className="container" style={myStyle}>
            <hr/>
            <h3 className="my-3">Todo List</h3>
            {props.todos.length===0? "No Todo today" : 

                props.todos.map((todo) =>{
                    return <TodoItem todo={todo} onDelete={props.onDelete}/>
                })
            }
        </div>
    )
}
