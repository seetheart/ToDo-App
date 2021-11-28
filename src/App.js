
import './App.css';
import React from "react"
import Item from "./Todoitems.js"
import todoData from "./todoData"

export default function App() {
const todoItems=todoData.map(item => <Item key= {item.id} listitem ={item} />)

  return(
  <div className="todo-list">
    {todoItems}
  </div>
)
  }