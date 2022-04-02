import React from "react";

import Card from "../@rechat/components/Common/Card";
import AddForm from "../@rechat/components/Common/AddTask";
import Box from "../@rechat/components/Common/Box";

const Home = () => {

    return (
        <div className="page-root">
            <div className="container" >
                <AddForm />
                {/* Task List Section */}
                <Card>
                    <Box />
                    <Box />
                </Card>
            </div>
        </div>
    );
};

export default Home;