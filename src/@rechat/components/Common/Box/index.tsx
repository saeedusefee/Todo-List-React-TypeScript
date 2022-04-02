import React from "react";

import "./index.css";

import StatusBox from "./StatusBox";

const EditIcon = "assets/edit-svgrepo-com.svg";

const Box = () => {

    const onEditTask = () => {
    };

    return (
        <React.Fragment>
            <div className="box-root">
                <h3>title</h3>
                <p>description</p>
                <div className="box-footer">
                    <StatusBox />
                    <button className="icon-button" onClick={() => onEditTask()}><img alt="edit" src={EditIcon} /></button>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Box;