import { checkError, client } from './client';

export async function fetchTodoList() {
  const resp = await client.from('todos').select('*');
  return checkError(resp);
}

export async function createTask(task) {
  const resp = await client.from('todos').insert([{ task: task, user_id: client.auth.user().id }]);
  return checkError(resp);
}

export async function deleteTask(id) {
  const resp = await client.from('todos').delete().match({ id: id });
  return checkError(resp);
}

export async function updateTask(id, is_complete) {
  const resp = await client.from('todos').update({ is_complete: is_complete }).eq('id', id);
  return checkError(resp);
}
