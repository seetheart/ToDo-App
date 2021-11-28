import React from "react"

export default function Item(props)
{
return(
    <div className="todo-item">
    <input type="checkbox" checked={props.listitem.completed}/>
    <p> {props.listitem.text}</p>
    </div>
)

}