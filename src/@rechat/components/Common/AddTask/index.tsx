import React, { useState } from "react";

const AddIcon = "assets/plus-svgrepo-com.svg";

const AddForm = () => {
    const [taskTitle, setTaskTitle] = useState('');
    const [taskDesription, setTaskDesription] = useState('');

    return (
        <React.Fragment>
            <h2 className="title">
                Add a new Task
            </h2>
            <form onSubmit={e => e.preventDefault()} className="form-root">
                <input onChange={e => setTaskTitle(e.target.value)} type="text" placeholder="title" />
                <textarea onChange={e => setTaskDesription(e.target.value)} placeholder="description" />
                <button ><img alt="add" className="add-icon" src={AddIcon} />Add</button>
            </form>
        </React.Fragment>
    );
                
};

export default AddForm;

                