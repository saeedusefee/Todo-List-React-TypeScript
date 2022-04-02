import React, { useContext, useEffect } from "react";

import Card from "../@rechat/components/Common/Card";
import Box from '../@rechat/components/Common/Box';
import AddForm from "../@rechat/components/Common/AddTask";

import { getTasks } from "../@rechat/components/contetxProvider/TodoAction";
import { TodoContext } from '../@rechat/components/contetxProvider/TodoContext';

const Home = () => {
    const { tasks, setTasks }: any = useContext(TodoContext);


    useEffect(() => {
        getTasks(setTasks);
    }, []);

    return (
        <div className="page-root">
            <div className="container" >
                <AddForm />
                {/* Task List Section */}
                <Card>
                    {tasks ? <Box tasks={tasks} /> : <p>You have not to do.<br/>Go get some sleep</p>}
                </Card>
            </div>
        </div>
    );
};

export default Home;