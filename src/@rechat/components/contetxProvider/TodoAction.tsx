import axios from 'axios';

import { taskType } from '../../utils/constantTypes'

/* get task list of databae */
export const getTasks = async (setTasks?: any) => {
    // if you want run test change url to https://jsonplaceholder.typicode.com/todos if you run app url equal to /tasks
    await axios.get('/tasks').then(data => { 
    if (data.status === 200) {
        setTasks(data.data);
    } else {
        console.log('somthing went wrong!');
    }
    }).catch(error => {
        console.log(error);
    });
};

/* post task to task list of database */
export const addTask = async (tasks: Array<taskType>, setTasks: any, task: object) => {
    await axios.post('/tasks', { task }).then(data => {
        if (data.status === 200) {
            setTasks(tasks.concat(data.data));
        } else {
            console.log('somthing went wrong!');
        }
    }).catch(error => {
        console.log(error);
    });
};

/* edit and update task of task list */
export const updateTask = async (setTasks: any, task: object) => {
    await axios.put('/tasks', { task }).then(data => {
      if (data.status === 200) {
          console.log(data.data)
        setTasks(data.data);
      } else {
        console.log('somthing went wrong!');
      }
    }).catch(error => {
        console.log(error);
    });
};