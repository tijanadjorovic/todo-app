import React from "react";
import TaskList from "../../components/TaskList/TaskList";
import NewTask from "../../components/NewTask/NewTask";
import User from "../../components/Users/users.js";
import OneToDo from "../../components/OneToDo/OneToDo";
import TaskDetails from "../../components/TaskDetails/TaskDetails";
import './Home.css';


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      detailsVisible: false,
      selectedToDo: []
    }
    this.addItem = this.addItem.bind(this);
    this.handleToDoClick = this.handleToDoClick.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.markTodoDone = this.markTodoDone.bind(this);
  }
    
    componentDidMount() {
      const url = `https://jsonplaceholder.typicode.com/todos`;
      fetch(url)
        .then(response => response.json())
        .then(data => {
          let allItems = data.slice(0,5);
          this.setState({
              todos: allItems
          })
        });
    }

    addItem(todoItem) {
      let todoItems = this.state.todos
      todoItems.unshift(todoItem.newItem);
      this.setState({todos: todoItems});
    }


    handleToDoClick(item){           
      this.setState({
          selectedTask: item,
          detailsVisible: true
      })
    }

    removeItem (itemIndex) {      
      let allItems = this.state.todos
      let all = allItems.filter(element => element.id !== itemIndex)
      this.setState({
          todos: all
      });
  }
    markTodoDone(itemIndex) {        
      const todo = this.state.todos;
      itemIndex.completed = !itemIndex.completed;

      if(itemIndex.completed) {
          todo[itemIndex] = itemIndex
      }
      this.setState({todos: todo});          
    }

    render() { 
      const showDetails = this.state.detailsVisible ? <div className="details"><TaskDetails allInfo={this.state.selectedTask} /></div> : null

      return (
        <div className="home">
          <User/>
          <div className="hp">
          <h1>Task List</h1>
          <p><i>Enter your ToDo Task:</i></p>
            </div>    
          <NewTask addItem={this.addItem} allData={this.state.todos}/>
          <ul className="list" >{
            this.state.todos.map(todo => 
              <OneToDo     
                markTodoDone={this.markTodoDone} 
                removeItem={this.removeItem}
                key={todo.id}                    
                clickhandler={this.handleToDoClick}
                selectedTask={this.state.detailsVisible}
                allData={this.state.todos}
                item={todo}
              />  
            )            
          } 
          </ul>
          {showDetails}
        </div>
      );
    }
}

export default Home;
