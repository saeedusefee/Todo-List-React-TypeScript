import React from "react";
import "./index.css";
import { HistoryType } from "../../../utils/constantTypes";

const HistoryBox = ({history}: HistoryType) => {
    return (
        <div className="history-status">
            last title: {history.title}
            <br/>last description: {history.description}
            <br/>last status: {history.status}
        </div>
    );
};

export default HistoryBox;