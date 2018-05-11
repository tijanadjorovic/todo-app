import React, {Component} from 'react';

import './OneToDo.css'

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
    
    return (
      <li key={data.id} 
          onClick={() => clickhandler(data)} className={data.completed ? 'active' : ''}> 
        {data.title}
        <button onClick={() => this.props.markTodoDone(data)} className={data.completed ? 'check' : 'unCheck'}></button>
        <button className='del' onClick={() => this.props.removeItem(data.id)}>Remove</button>
      </li>
    );
  }
}

export default OneToDo;