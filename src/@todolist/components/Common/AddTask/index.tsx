import React, { useContext, useState } from "react";

import { addTask } from "../../contetxProvider/TodoAction";
import { TodoContext } from "../../contetxProvider/TodoContext";

const AddIcon = "assets/plus-svgrepo-com.svg";

const AddForm = () => {
    const [taskTitle, setTaskTitle] = useState('');
    const [taskDesription, setTaskDesription] = useState('');

    const { tasks, setTasks }: any = useContext(TodoContext);

    const onAddTask = () => {
        if (taskTitle !== '') {
            addTask(tasks, setTasks, {
                id: new Date().getTime(),
                title: taskTitle,
                status: 'todo',
                description: taskDesription,
            });
        }
    }

    return (
        <React.Fragment>
            <h2 className="title">
                Add a new Task
            </h2>
            <form onSubmit={e => e.preventDefault()} className="form-root">
                <input onChange={e => setTaskTitle(e.target.value)} type="text" placeholder="title" />
                <textarea onChange={e => setTaskDesription(e.target.value)} placeholder="description" />
                <button onClick={onAddTask}><img alt="add" className="add-icon" src={AddIcon} />Add</button>
            </form>
        </React.Fragment>
    );
                
};

export default AddForm;