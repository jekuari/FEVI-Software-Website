import React, { Component } from 'react';
import './CubeGenerator.css';

export default class CubeGenerator extends Component {
    constructor(props) {
        super(props);
        this.state = ({faces: '', faceStyle: [
            {width: `${this.props.faceSize}px`, height: `${this.props.faceSize}px`, backgroundColor: this.props.faceColors[1], position: 'absolute', transform: `rotateY(360deg) translateZ(${this.props.faceSize / 2}px)`},
            {width: `${this.props.faceSize}px`, height: `${this.props.faceSize}px`, backgroundColor: this.props.faceColors[2], position: 'absolute', transform: `rotateY(180deg) translateZ(${this.props.faceSize / 2}px)`},
            {width: `${this.props.faceSize}px`, height: `${this.props.faceSize}px`, backgroundColor: this.props.faceColors[3], position: 'absolute', transform: `rotateY(90deg) translateZ(${this.props.faceSize / 2}px)`},
            {width: `${this.props.faceSize}px`, height: `${this.props.faceSize}px`, backgroundColor: this.props.faceColors[4], position: 'absolute', transform: `rotateY(270deg) translateZ(${this.props.faceSize / 2}px)`},
            {width: `${this.props.faceSize}px`, height: `${this.props.faceSize}px`, backgroundColor: this.props.faceColors[0], position: 'absolute', transform: `rotateX(90deg) translateZ(${this.props.faceSize / 2}px)`},
            {width: `${this.props.faceSize}px`, height: `${this.props.faceSize}px`, backgroundColor: this.props.faceColors[5], position: 'absolute',  transform: `rotateX(270deg) translateZ(${this.props.faceSize / 2}px)`},
        ], FacesContainerStyle: {
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            transformStyle: 'preserve-3d',
            textAlign: 'center',
            transition: 'transform 3s ease-in-out',
        }, MainContainer: {
            position: 'absolute',
            perspective: this.props.perspective,
            transformStyle: 'preserve-3d',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }});
        this.generateFaces = this.generateFaces.bind(this);
    }
    componentDidMount() {
        window.setTimeout(() => {
            this.generateFaces();
        }, 100);
    }
    generateFaces() {
        let faces = [];
        for (let i = 0; i < 6; i++) {
            faces.push(<div id={this.props.id + 'face' + i} key={this.props.id + 'key' + i} style={this.state.faceStyle[i]}></div>);
        }
        this.setState({faces: faces});
    } 
  render() {
    return (
      <div className='CubeGenerator' style={this.state.MainContainer} id={this.props.id}>
          <div className='FacesContainer' style={this.state.FacesContainerStyle}>
            {this.state.faces}
          </div>
      </div>
    )
  }
}
