import mock from '../../mockConfig';
import { tasks } from '../../../@fake-db/todo';
import { idGenerator } from '../../../@todolist/utils/commonHelper';

let tasksList = tasks;

mock.onGet('/tasks').reply(() => {
  return [200, tasksList];
});

mock.onPost('/tasks').reply((request: any) => {
  const { task } = JSON.parse(request.data);
  const newTask = {
    ...task,
    id: idGenerator(),
  };
  tasksList.push(newTask);
  return [200, newTask];
});

mock.onPut('/tasks').reply((request: any) => {
  const { task } = JSON.parse(request.data);
  tasksList = tasksList.map(item => (item.id === task.id ? task : item));
  return [200, tasksList];
});
