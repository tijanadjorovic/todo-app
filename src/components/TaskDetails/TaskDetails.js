import React, { Component } from "react";
 
const TaskDetails = (props) =>{  
  let info = props.allInfo
  let a = '';
  if(info.completed) {
    a = 'Completed'
  }else {
    a = 'Not completed'
  }
  
  return (
  <div>
    <h3>Title: {info.title}</h3>   
    <p>ID: {info.id}</p>
    <p>Task status: {a}</p>
  </div>
  );
};

export default TaskDetails;