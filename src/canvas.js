import React, { Component } from 'react';
import './canvas.css';

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
        <canvas ref="canvas" height="517" width="1087"></canvas>
    );
  }
}
export default Canvas;
