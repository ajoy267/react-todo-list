import React from 'react';
import './TodoList.css';

export default function TodoList({ task, handleClick }) {
  return (
    <div>
      <h3 className="todo-list-title">My To Do List</h3>
      <ul>
        {task.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              checked={item.is_complete}
              onChange={() => {
                handleClick(item);
              }}
            />
            {item.task}
          </li>
        ))}
      </ul>
    </div>
  );
}
