import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import "./index.css";

import StatusBox from "./StatusBox";
import { TaskStateType } from '../../../utils/constantTypes';
import { TodoContext } from "../../contetxProvider/TodoContext";

const EditIcon = "assets/edit-svgrepo-com.svg";

const Box = ({tasks}: TaskStateType) => {
    const navigate = useNavigate();

    const { setCurrentTask }: any = useContext(TodoContext)

    const onEditTask = (item: object) => {
        setCurrentTask(item);
        navigate('/edit');
    };

    return (
        <React.Fragment>
            {
                tasks.map((item) => 
                    <div key={item.id} className="box-root">
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <div className="box-footer">
                            <StatusBox statusProp={item.status} />
                            <button className="icon-button" onClick={() => onEditTask({...item})}><img alt="edit" src={EditIcon} /></button>
                        </div>
                    </div>
                )
            }
        </React.Fragment>
    );
};

export default Box;