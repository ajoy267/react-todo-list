import React, { useEffect, useState } from 'react';
import { logout } from '../../services/users';
import { useHistory } from 'react-router-dom';
import TodoList from '../../components/TodoList/TodoList';
import { createTask, fetchTodoList } from '../../services/todo';
import AddTask from '../../components/AddTask/AddTask';

export default function Todo({ setCurrentUser }) {
  const [task, setTask] = useState([]);
  const [addTask, setAddTask] = useState({});
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  const logoutUser = async () => {
    await logout();
    setCurrentUser(null);
    history.push('/');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createTask(addTask);
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
      <TodoList task={task} />
      <AddTask setAddTask={setAddTask} handleSubmit={handleSubmit} />
      <button onClick={logoutUser}>Log Out</button>
    </div>
  );
}
