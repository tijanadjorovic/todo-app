import React, {Component} from 'react';

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
      </li>
    );
  }
}

export default OneToDo;
