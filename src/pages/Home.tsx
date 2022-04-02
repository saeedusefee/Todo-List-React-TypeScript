import React from "react";

import Card from "../@rechat/components/Common/Card";
import AddForm from "../@rechat/components/Common/AddTask";

const Home = () => {

    return (
        <div className="page-root">
            <div className="container" >
                <AddForm />
                {/* Task List Section */}
                <Card>
                </Card>
            </div>
        </div>
    );
};

export default Home;