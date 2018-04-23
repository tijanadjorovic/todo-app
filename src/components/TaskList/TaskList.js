import React, {Component} from 'react';
import './TaskList.css';
import OneToDo from '../OneToDo/OneToDo'

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      selectedToDo: []
    }

    this.handleToDoClick = this.handleToDoClick.bind(this)
  }

  componentDidMount() {
    const url = `https://jsonplaceholder.typicode.com/todos`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
          let allItems = data.slice(0,5);
          this.setState({todos: allItems});
        });
  }
  
  handleToDoClick(item){ 
    console.log(item);
    
    this.setState({
      selectedToDo: item
    })
  }

  render() {
    return (
      <div>
        <ul>{
          this.state.todos.map(todo => 
              <OneToDo     
                key={todo.id}                    
                clickhandler={this.handleToDoClick}
                selectedToDoID={this.state.selectedToDo.id}
                allData={this.state.todos}
                item={todo}
              />  
            )            
          }
          
        </ul>
      
      </div>
    )    
  }
}

export default TaskList;