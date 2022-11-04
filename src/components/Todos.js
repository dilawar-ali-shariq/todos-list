import React from "react";
import Todo from "./Todo"

export default function Todos(props){

    return(
        <div className="container" style={{ minHeight: "70vh" }}>
            <h3 className="my-3">Todos List</h3>
            {props.todos.length === 0 ? "No Todos to display" : 
                props.todos.map((todo) => {
                    return <Todo todo={todo} key={todo.sno} onDelete={props.onDelete}/>
                })
            }   
        </div>
    )
}