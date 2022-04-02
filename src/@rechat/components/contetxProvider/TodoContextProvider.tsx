import React, { useState } from "react";

import { TodoContext } from "./TodoContext";

import { ChildrenProps } from '../../utils/constantTypes'
import defaultContext from "./defaultContext";

export const TodoContextProvider = ({ children }: ChildrenProps) => {
    const [tasks, setTasks] = useState(defaultContext.tasks);
    const [currentTask, setCurrentTask] = useState(defaultContext.currentTask);

    const contextValue = React.useMemo(() => {
        return {
            tasks,
            setTasks,
            currentTask,
            setCurrentTask
        };
    }, [tasks, currentTask]);
  
    return <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
};