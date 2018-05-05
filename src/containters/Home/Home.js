import React from "react";
import TaskList from "../../components/TaskList/TaskList";
import NewTask from "../../components/NewTask/NewTask";
import User from "../../components/Users/users.js";
import OneToDo from "../../components/OneToDo/OneToDo";

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

// prima info iz NewTaska na sta je kliknuto (todoItem)
    addItem(todoItem) {
// pamti u let niz sa svim taskovima - zbog kraceg pisanja
      let todoItems = this.state.todos
// stavlja ga u niz (unshift) sa svim taskovima
      todoItems.unshift(todoItem.newItem);
// menja state sa svim taskovima (todos) sa novim taskom dodatim na prvo mesto
      this.setState({todos: todoItems});
    }


// ispisuje u konzoli info o tasku na koji kliknes
    handleToDoClick(item){ 
      this.setState({
        selectedToDo: item,
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
      
      return (
        <div>
          <User/>
          <h1>Task List</h1>
          <p><i>Enter your ToDo Task:</i></p>
                
{/* prosledjuje NewTask komponenti funkciju addItem i niz sa svim taskovima (ovo je zbog racunanje duzine za id)*/}
          <NewTask addItem={this.addItem} allData={this.state.todos}/>
          <ul className="list" >{
            this.state.todos.map(todo => 
              <OneToDo     
                markTodoDone={this.markTodoDone} 
                removeItem={this.removeItem}
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
      );
    }
}

export default Home;
