import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { TodoContext } from "../@rechat/components/contetxProvider/TodoContext";


const Edit = () => {
    const navigate = useNavigate();

    const { currentTask }: any = useContext(TodoContext);

    const [taskTitle, setTaskTitle] = useState(currentTask?.title || '');
    const [taskDesription, setTaskDesription] = useState(currentTask?.description || '');
    const [statusTask, setStatusTask ] = useState(currentTask?.status || 'todo');

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
                        value={statusTask}>
                        <option value={'blocked'}>Blocked</option>
                        <option value={'todo'}>ToDo</option>
                        <option value={'InProgress'}>InProgress</option>
                        <option value={'InQA'}>InQA</option>
                        <option value={'done'}>Done</option>
                    </select>
                    <div className="edit-form-btn">
                        <button >Edit</button>
                        <button onClick={() => navigate('/')} className="white-button">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Edit;