import axios from 'axios';

import { taskType } from '../../utils/constantTypes'

/* get task list of databae */
export const getTasks = async (setTasks: any) => {
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
