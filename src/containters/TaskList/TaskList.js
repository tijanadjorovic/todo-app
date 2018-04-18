import React, {Component} from 'react';
import './TaskList.css';

class TaskList extends Component{
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }
  }

  componentDidMount() {
    const url = `https://jsonplaceholder.typicode.com/todos`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data.slice(0,10));
        this.setState({todos: data});
        });
  }

  render() {
    return (
      <div>
        <h1>Task List</h1>
        {
          this.state.todos.slice(0,10).map(
              todo => <div
                  key={todo.id}>
                  <div >
                    {todo.title}
                  </div>
                  </div>
          )
        }
      </div>
    )    
  }
}

export default TaskList;