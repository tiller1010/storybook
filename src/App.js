import React, { Component } from 'react';
import './App.css';

class Page extends Component{
  constructor(props){
    super();
    this.state={
      alignment: this.pages[this.pageNumber]
    }
    this.turnPage=this.turnPage.bind(this);
    this.turnPageBack=this.turnPageBack.bind(this);
  }

  pages=['left','right'];
  pageNumber=0;

  turnPage(){
    ++this.pageNumber;
    this.setState({
      alignment: this.pages[this.pageNumber]
    });
  }

  turnPageBack(){
    --this.pageNumber;
    this.setState({
      alignment: this.pages[this.pageNumber]
    });
  }

  render(){
    return(
      <div className={this.state.alignment}>
        <button onClick={this.turnPageBack}>Previous Page</button>
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
