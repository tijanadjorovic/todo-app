import React, { Component } from "react";
import FlipMove from "react-flip-move";
 
class Task extends Component {

  constructor(props) {
    super(props);
 
    this.createTasks = this.createTasks.bind(this);
  }

  delete(key) {
    this.props.delete(key);
  }

  createTasks(item) {
    return <li onClick={() => this.delete(item.key)} key={item.key}>{item.text} </li>
  }
 
  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);
 
    return (
      <div>
      <ul>
        <FlipMove duration={250} easing="ease-out">
          {listItems}
        </FlipMove>
      </ul>
      </div>
    );
  }
};
 
export default Task;