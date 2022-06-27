import React from "react";

interface StatusType {
    statusProp: string
}

const StatusBox = ({statusProp}: StatusType) => {
    return <div className="status-box">{statusProp}</div>;
};

export default StatusBox;