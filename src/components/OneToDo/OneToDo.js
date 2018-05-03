import React, {Component} from 'react';
import TaskDetails from '../TaskDetails/TaskDetails';

class OneToDo extends Component{
  constructor(props){
    super(props)
    this.state = {
        data: {}
    }   

  }

  render(){
    const data = this.props.item;
    const clickhandler = this.props.clickhandler;  
    const all = this.props.allData
    
    return (
      <li key={data.id} 
          onClick={() => clickhandler(data)} > 
        {data.title}
        <button onClick={() => this.props.removeItem(data.id)}>remove</button>
        <TaskDetails />
      </li>
    );
  }
}

export default OneToDo;