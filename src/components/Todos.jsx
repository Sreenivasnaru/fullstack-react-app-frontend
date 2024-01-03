/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

import { useState } from "react";


export function Todos({ todos }) {


  return (
    <div>
      {todos.map(function(todo) {
        return (
          <div>
            <h1>{todo.title}</h1>
            <h2 >{todo.description}</h2>
            <button >
              {todo.completed == true ? "completed" : "Mark as completed"}
            </button>
          </div>
        );
      })}
    </div>
  );
}
