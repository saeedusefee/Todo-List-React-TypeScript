import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { updateTask } from "../@rechat/components/contetxProvider/TodoAction";
import { TodoContext } from "../@rechat/components/contetxProvider/TodoContext";
import { taskType } from "../@rechat/utils/constantTypes";


const Edit = () => {
    const navigate = useNavigate();

    const { setTasks, currentTask }: any = useContext(TodoContext);

    const [taskTitle, setTaskTitle] = useState(currentTask?.title || '');
    const [taskDesription, setTaskDesription] = useState(currentTask?.description || '');
    const [statusTask, setStatusTask ] = useState(currentTask?.status || 'todo');

    const onChangeStatus = (value: string) => {
        /* Only the following status transitions are allowed */
        if (currentTask?.status === 'todo' && value === 'InProgress') { 
            // todo > InProgress
            setStatusTask(value);
        } else if (currentTask?.status === 'InProgress' && (value === 'blocked' || value === 'InQA')) { 
            // blocked < InProgress > InQA
            setStatusTask(value);
        } else if (currentTask?.status === 'blocked' && value === 'todo') {
            // blocked > todo
            setStatusTask(value);
        } else if (currentTask?.status === 'InQA' && (value === 'todo' || value === 'done')) {
            // ToDo < InQA > done
            setStatusTask(value);
        } else if (currentTask?.status === 'done' && value === 'InQA') {
            // Done > InQA ** it's just for pervent to locking status **
            setStatusTask(value);
        } else if (currentTask?.status === value){
            // without change
            setStatusTask(value);
        }
    };


    const handleEdit = () => {
        updateTask(setTasks, {
            id: currentTask.id,
            title: taskTitle,
            description: taskDesription,
            status: statusTask,
        });
        // navigate to the home after editing task
        navigate('/');
    };
    
    return (
        <div className="page-root">
            <div className="container">
                <h2 className="title">
                    Edite Task
                </h2>
                <form className="form-root">
                    <input 
                        type="text" 
                        placeholder="title"
                        value={taskTitle}/>
                    <textarea 
                        className="edit-description" 
                        placeholder="description"
                        value={taskDesription}/>
                    <select
                        value={statusTask}
                        onChange={(e) => onChangeStatus(e.target.value)}>
                        <option value={'blocked'}>Blocked</option>
                        <option value={'todo'}>ToDo</option>
                        <option value={'InProgress'}>InProgress</option>
                        <option value={'InQA'}>InQA</option>
                        <option value={'done'}>Done</option>
                    </select>
                    <div className="edit-form-btn">
                        <button onClick={handleEdit}>Edit</button>
                        <button onClick={() => navigate('/')} className="white-button">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Edit;