import React from 'react';

export default function TodoList({ task, handleClick }) {
  return (
    <div>
      <h3>My To Do List</h3>
      {task.map((item) => (
        <ul key={item.id}>
          <li>
            <input
              type="checkbox"
              checked={item.is_complete}
              onChange={() => {
                handleClick(item);
              }}
            />
            {item.task}
          </li>
        </ul>
      ))}
    </div>
  );
}
