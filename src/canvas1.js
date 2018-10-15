import React, { Component } from 'react';
import './App.css';

class Canvas extends Component{

  componentDidMount() {
    this.updateCanvas();
  }

  updateCanvas() {
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(100,100);
    ctx.lineTo(20,20);
    ctx.stroke();
  }

  render(){
    return(
        <canvas ref="canvas" height="100" width="100"></canvas>
    );
  }
}
export default Canvas;
