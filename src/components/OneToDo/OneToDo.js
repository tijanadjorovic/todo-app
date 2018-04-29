import React, {Component} from 'react';

class OneToDo extends Component{
  constructor(props){
    super(props)
    this.state = {
        data: {}
    }   
  }
//klikom na task ispusuje info taska u konzoli
  render(){
    const data = this.props.item;
    const clickhandler = this.props.clickhandler;  
    const all = this.props.allData
    
    return (
      <li key={data.id} 
          onClick={() => clickhandler(data)} > 
          {/* dodati button delete */}
        {data.title}
      </li>
    );
  }
}

export default OneToDo;
