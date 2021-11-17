
import './App.css';
import React from "react"
import Item from "./Todoitems.js"

export default function App() {
  
  return(
  <div className="todo-list">
      <Item />
      <Item />
      <Item />
      <Item />
  </div>
)
  }