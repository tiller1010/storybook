import React, { Component } from 'react';
import './App.css';
import Canvas from './canvas.js'


class Page extends Component{
  constructor(props){
    super();
    this.state={
      currentPage: this.pages[this.pageNumber]
    }
    this.turnPage=this.turnPage.bind(this);
    this.turnPageBack=this.turnPageBack.bind(this);
  }

  pages=['title','one','two'];
  pageNumber=0;
  messages=['Jaw-Vah\'s Crypt','In the crypt there exist creatures known as "Very-Ables"','This is the second page'];

  turnPage(){
    if(this.pageNumber<this.pages.length-1){
      ++this.pageNumber;
    }
    this.setState({
      currentPage: this.pages[this.pageNumber]
    });
  }

  turnPageBack(){
    if(this.pageNumber>0){
      --this.pageNumber;
    }
    this.setState({
      currentPage: this.pages[this.pageNumber]
    });
  }

  render(){
    return(
      <div id='border' className={this.state.currentPage}>
        <div className='frame'></div>
          <div id='text'>{this.messages[this.pageNumber]}</div>
          <div id='pageNumber'>{this.pageNumber}</div>
            <button id='previous' onClick={this.turnPageBack}>Previous Page</button>
            <button id='next' onClick={this.turnPage}>Next Page</button>
              <div className='buildBlocks'>
                <div id='block1' className='blocks'></div>
                <div id='block2' className='blocks'></div>
                <div id='block3' className='blocks'></div>
                <div id='block4' className='blocks'></div>
                <div id='block5' className='blocks'></div>
                <div id='block6' className='blocks'></div>
                <div id='block7' className='blocks'></div>
                <div id='block8' className='blocks'></div>
                <div id='block9' className='blocks'></div>
                <div id='block10' className='blocks'></div>
            </div>
            <Canvas pageNumber={this.state.currentPage}/>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
      <Page/>
    </div>
    );
  }
}

export default App;
