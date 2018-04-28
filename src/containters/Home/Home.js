import React from "react";
import TaskList from "../../components/TaskList/TaskList";
import NewTask from "../../components/NewTask/NewTask";
import User from "../../components/Users/users.js";

class Home extends React.Component {
    render() {
        return (
            <div>
                <User/>
            	<h1>Task List</h1>
            	<p><i>Enter your ToDo Task, and remove it by clicking on it:</i></p>
            	<NewTask />
                <TaskList />
            </div>
        );
    }
}

export default Home;
