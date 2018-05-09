import React, { Component } from "react";
import './TaskDetails.css';

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
    <h6>Task status: {a}</h6>
  </div>
  );
};

export default TaskDetails;