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

  // umesto Date.now() id se dobija tako sto se na duzinu niza dodaje 1

    addItem(e){
      if (this._inputElement.value !== "") {
        let newItem = {
          title: this._inputElement.value,
          id: this.props.allData.length + 1
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
        <div className="listMain" >
          <form onSubmit={this.addItem}>
            <input ref={(a) => this._inputElement = a} placeholder="enter task">
            </input>
            <button type="submit">add</button>
          </form>
          {/* <Task entries={this.state.items}
                 delete={this.deleteItem} /> */}
        </div>
      )
    }
  }

export default NewTask;