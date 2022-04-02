import React from "react";
import CardHeader from "./CardHeader";

export interface CardProps {
    children?: React.ReactElement | React.ReactElement[]
};

const Card = ({children}: CardProps) => {
    return (
        <div className="card-root">
            <CardHeader />
            <div className="card-container">
                {children}
            </div>
        </div>
    );
}

export default Card;