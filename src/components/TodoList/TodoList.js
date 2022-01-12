import React from 'react';

export default function TodoList({ task }) {
  return (
    <div>
      <h3>My To Do List</h3>
      {task.map((item) => (
        <ul key={item.id}>
          <li>
            <input type="checkbox" />
            {item.task}
          </li>
        </ul>
      ))}
    </div>
  );
}
