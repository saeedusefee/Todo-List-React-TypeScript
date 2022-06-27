import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import HistoryBox from "../@todolist/components/Common/HistoryBox";

import { updateTask } from "../@todolist/components/contetxProvider/TodoAction";
import { TodoContext } from "../@todolist/components/contetxProvider/TodoContext";
import { taskType } from "../@todolist/utils/constantTypes";

const statusTransitions: any = {
    'todo': ['todo', 'InProgress'],
    'InProgress': ['InProgress', 'blocked', 'InQA'],
    'blocked': ['blocked', 'todo'],
    'InQA': ['InQA', 'todo', 'done'],
    'done': ['done', 'InQA'],
}

const Edit = () => {
    const navigate = useNavigate();

    const { tasks, setTasks, currentTask }: any = useContext(TodoContext);

    const [taskTitle, setTaskTitle] = useState(currentTask?.title || '');
    const [taskDesription, setTaskDesription] = useState(currentTask?.description || '');
    const [statusTask, setStatusTask ] = useState(currentTask?.status || 'todo');

    const history = currentTask?.history; // clone history of changes
    const currentTaskStatus = currentTask?.status;

    const onChangeStatus = (value: string) => { 
        const followingStatusAllowed = statusTransitions[currentTaskStatus];

        followingStatusAllowed.map((item: string) => {
            if (value === item) setStatusTask(value);
        });
    };


    const handleEdit = () => {
        updateTask(setTasks, {
            id: currentTask.id,
            title: taskTitle,
            description: taskDesription,
            history: tasks.filter((item: taskType) => item.id === currentTask.id),
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
                {/* history status */}
                {history ? <HistoryBox history={history[0]}/> : null}
                <form className="form-root">
                    <input 
                        type="text" 
                        placeholder="title"
                        value={taskTitle}
                        onChange={(e) => setTaskTitle(e.target.value)}/>
                    <textarea 
                        className="edit-description" 
                        placeholder="description"
                        value={taskDesription}
                        onChange={(e) => setTaskDesription(e.target.value)}/>
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