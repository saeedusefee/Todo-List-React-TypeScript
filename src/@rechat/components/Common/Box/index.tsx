import React from "react";
import { useNavigate } from "react-router-dom";

import "./index.css";

import StatusBox from "./StatusBox";
import { TaskStateType } from '../../../utils/constantTypes';

const EditIcon = "assets/edit-svgrepo-com.svg";

const Box = ({tasks}: TaskStateType) => {
    const navigate = useNavigate();

    const onEditTask = () => {
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
                            <button className="icon-button" onClick={() => onEditTask()}><img alt="edit" src={EditIcon} /></button>
                        </div>
                    </div>
                )
            }
        </React.Fragment>
    );
};

export default Box;