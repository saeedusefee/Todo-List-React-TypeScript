import React from "react";
import { useNavigate } from "react-router-dom";


const Edit = () => {
    const navigate = useNavigate();

    return (
        <div className="page-root">
            <div className="container">
                <h2 className="title">
                    Edite Task
                </h2>
                <form className="form-root">
                    <input 
                        type="text" 
                        placeholder="title"/>
                    <textarea 
                        className="edit-description" 
                        placeholder="description"/>
                    <select>
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