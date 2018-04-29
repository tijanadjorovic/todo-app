import React, {Component} from 'react';
import './NewTask.css';
import Task from '../Task/Task';

class NewTask extends Component {

  constructor(props) {
    super(props);

    this.state = {
      items: []
    };

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);

  }

  addItem(e){
    if (this._inputElement.value !== "") {
      let newItem = {
        title: this._inputElement.value,
        id: Date.now()
      };
      console.log(this._inputElement.value);
      
    this.setState((prevState) => {
      return { 
        items: prevState.items.concat(newItem)
      };
    });
   
// poziva se funkcija iz Home i prosledjuje joj se newItem objekat
this.props.addItem({newItem});
this._inputElement.value = "";
}
     
      e.preventDefault();
    }

    deleteItem(id) {
      var filteredItems = this.state.items.filter(function (item) {
        return (item.id !== id);
        });
   
        this.setState({
        items: filteredItems
        });
      }

    render(){
      return(
        <div className="listMain" >
          <form onSubmit={this.addItem} >
            <input ref={(a) => this._inputElement = a} placeholder="enter task">
            </input>
            <button type="submit">add</button>
          </form>
        </div>
      )
    }
  }

export default NewTask;