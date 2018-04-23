import React, { Component } from "react";
 
class Task extends Component {

  createTasks(item) {
    return <li key={item.key}>{item.text} </li>
  }
 
  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);
 
    return (
      <div>
          {listItems}
      </div>
    );
  }
};
 
export default Task;