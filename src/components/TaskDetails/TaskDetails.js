import React, { Component } from "react";
 
const TaskDetails = (props) =>{  
  let info = props.allInfo
  let a = '';
  if(info.completed) {
    a = 'Completed!'
  }else {
    a = 'In progress...'
  }
  
  return (
  <div>
    <h3>Task: {info.title}</h3>   
    <p>Task status: {a}</p>
  </div>
  );
};

export default TaskDetails;