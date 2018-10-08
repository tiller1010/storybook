import React, { Component } from 'react';
import './App.css';

class Page extends Component{
  constructor(props){
    super();
    this.state={
      alignment: 'left'
    }
    this.turnPage=this.turnPage.bind(this);
  }

  turnPage(){
    this.setState({
      alignment: 'right'
    });
  }

  render(){
    return(
      <div className={this.state.alignment}>
        <button onClick={this.turnPage}>Previous Page</button>
        {this.props.pageText}
        <button onClick={this.turnPage}>Next Page</button>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <Page pageText="This is some longer sample text"/>
    );
  }
}

export default App;
