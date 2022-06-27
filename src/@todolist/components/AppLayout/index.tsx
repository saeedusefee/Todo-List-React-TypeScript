import React from "react";
import Header from "./Header";

import '../../../services/api/index';

import { ChildrenProps } from "../../utils/constantTypes";

const AppLayout = ({ children }: ChildrenProps) => {

    return (
        <div style={{ minHeight: '100vh', width: '100%', display: 'flex' }}>
            <Header />
            {children}
        </div>
    );
};

export default AppLayout;