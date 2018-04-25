import React from "react";
import TaskList from "../../components/TaskList/TaskList";
import NewTask from "../../components/NewTask/NewTask";

class Home extends React.Component {
    render() {
        return (
            <div>
            	<h1>Task List</h1>
            	<p>Enter your ToDo Task, and remove it by clicking on it</p>
            	<NewTask />
                <TaskList />
            </div>
        );
    }
}

export default Home;
