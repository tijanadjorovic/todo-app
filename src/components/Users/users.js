import React, {Component} from 'react';
import './Users.css';
import OneToDo from '../OneToDo/OneToDo'

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      selectedToDo: []
    }

    this.handleToDoClick = this.handleToDoClick.bind(this)
  }

  componentDidMount() {
    const url = `https://jsonplaceholder.typicode.com/users`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
          let allItems = data.slice(0,5);
          this.setState({users: allItems});
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
        <ul className="list2" >{
          this.state.users.map(user => 
              <OneToDo     
                key={user.id}                    
                clickhandler={this.handleToDoClick}
                selectedToDoID={this.state.selectedToDo.id}
                allData={this.state.users}
                item={user}
              />  
            )            
          }
          
        </ul>
        
      </div>
    )    
}
 };

export default User;