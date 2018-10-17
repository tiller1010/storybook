import React, { Component } from 'react';
import './canvas.css';

class Canvas extends Component{
  componentDidMount(){
    this.updateCanvas();
  }

  componentDidUpdate() {
    this.updateCanvas();
  }

  updateCanvas() {
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext("2d");
    if(this.props.pageNumber==='title'){
      ctx.clearRect(0,0,canvas.width,canvas.height);
      ctx.beginPath();
      ctx.moveTo(500,300);
      ctx.lineTo(200,200);
      ctx.stroke();
    }
    if(this.props.pageNumber==='one'){
      ctx.clearRect(0,0,canvas.width,canvas.height);
      ctx.beginPath();
      ctx.moveTo(100,100);
      ctx.lineTo(20,20);
      ctx.stroke();
    }
    if(this.props.pageNumber==='two'){
      ctx.clearRect(0,0,canvas.width,canvas.height);
      ctx.beginPath();
      ctx.moveTo(100,100);
      ctx.lineTo(20,200);
      ctx.stroke();
    }
  }

  render(){
    return(
      <div>
        <canvas ref="canvas" height="517" width="1087"></canvas>
      </div>
    );
  }
}
export default Canvas;
