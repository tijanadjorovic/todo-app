import React, {Component} from 'react';
import './Users.css';
import callUser from '../CallUser';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    }
  }

  render() {
    return (
      <div>
      <p className="list2" >  {
          this.state.users.map(user => 
              <userprofile
                key={user.id}                    
                clickhandler={this.handleToDoClick}
                selectedToDoID={this.state.selectedToDo.id}
                allData={this.state.users}
                item={user}
              />  
          )
        }     
        </p>
          </div>
          )
        }
  }    


export default User;