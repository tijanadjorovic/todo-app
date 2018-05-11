import React, {Component} from 'react';



class callUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      selectedToDo: []
    }

    this.handleToDoClick = this.handleToDoClick.bind(this)
  }

  componentDidMount() {
    const url = `https://jsonplaceholder.typicode.com/users`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
          let allItems = data.slice(0,5);
          this.setState({users: allItems});
        });
  }
  
  handleToDoClick(item){ 
    console.log(item);
    
    this.setState({
      selectedToDo: item
    })
  }
}

  export default callUser;
