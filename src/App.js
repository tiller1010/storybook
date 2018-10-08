import React, { Component } from 'react';
import './App.css';

class Page extends Component{
  constructor(props){
    super();
    this.state={
      currentPage: this.pages[this.pageNumber]
    }
    this.turnPage=this.turnPage.bind(this);
    this.turnPageBack=this.turnPageBack.bind(this);
  }

  pages=['one','two'];
  pageNumber=0;
  messages=['This is the first page','This is the second page'];

  turnPage(){
    ++this.pageNumber;
    this.setState({
      currentPage: this.pages[this.pageNumber]
    });
  }

  turnPageBack(){
    --this.pageNumber;
    this.setState({
      currentPage: this.pages[this.pageNumber]
    });
  }

  render(){
    return(
      <div className={this.state.currentPage}>
        <button onClick={this.turnPageBack}>Previous Page</button>
        <div className='frame'></div>
        {this.messages[this.pageNumber]}
        <button onClick={this.turnPage}>Next Page</button>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <Page/>
    );
  }
}

export default App;
