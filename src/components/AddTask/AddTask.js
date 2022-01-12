import React from 'react';

export default function AddTask({ addTask, setAddTask, handleSubmit }) {
  return (
    <div className="new-task">
      <input
        type="text"
        placeholder="Add a new Task Here"
        value={addTask}
        onChange={(e) => {
          setAddTask(e.target.value);
        }}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
