import mock from '../../mockConfig';
import { tasks } from '../../../@fake-db/todo';
import { idGenerator } from '../../../@rechat/utils/commonHelper';

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

