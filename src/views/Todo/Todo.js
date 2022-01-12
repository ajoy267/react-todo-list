import React, { useEffect, useState } from 'react';
import TodoList from '../../components/TodoList/TodoList';
import { createTask, fetchTodoList, updateTask } from '../../services/todo';
import AddTask from '../../components/AddTask/AddTask';
import Logout from '../../components/Logout/Logout';

export default function Todo({ setCurrentUser }) {
  const [task, setTask] = useState([]);
  const [addTask, setAddTask] = useState('');
  const [loading, setLoading] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resp = await createTask(addTask);
    setAddTask('');
    setTask((prev) => [...prev, resp[0]]);
  };

  const handleClick = async (task) => {
    await updateTask(task.id, !task.is_complete);
    const resp = await fetchTodoList();
    setTask(resp);
  };

  useEffect(() => {
    const getTodoList = async () => {
      const resp = await fetchTodoList();
      setTask(resp);
      setLoading(false);
    };
    if (loading) {
      getTodoList();
    }
  }, [loading]);
  return (
    <div>
      <Logout setCurrentUser={setCurrentUser} />
      <TodoList task={task} handleClick={handleClick} />
      <AddTask addTask={addTask} setAddTask={setAddTask} handleSubmit={handleSubmit} />
    </div>
  );
}
