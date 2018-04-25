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
          text: this._inputElement.value,
          key: Date.now()
        };
 
      this.setState((prevState) => {
        return { 
          items: prevState.items.concat(newItem)
        };
      });
   
      this._inputElement.value = "";
      }
     
      e.preventDefault();
    }

    deleteItem(key) {
    var filteredItems = this.state.items.filter(function (item) {
      return (item.key !== key);
      });
 
      this.setState({
      items: filteredItems
      });
    }


    render(){
      return(
        <div>
          <form onSubmit={this.addItem}>
            <input ref={(a) => this._inputElement = a} placeholder="enter task">
            </input>
            <button type="submit">add</button>
          </form>
          <Task entries={this.state.items}
                 delete={this.deleteItem} />
        </div>
      )
    }
  }

export default NewTask;