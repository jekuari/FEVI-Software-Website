import React, { Component } from 'react';
import './CubeGenerator.css';

export default class CubeGenerator extends Component {
    constructor(props) {
        super(props);
        this.state = ({faces: '', faceStyle: [
            {width: `${this.props.faceSize}px`, height: `${this.props.faceSize}px`, backgroundColor: 'red', position: 'absolute', transform: `rotateY(0deg) translateZ(${this.props.faceSize / 2}px)`},
            {width: `${this.props.faceSize}px`, height: `${this.props.faceSize}px`, backgroundColor: 'blue', position: 'absolute', transform: `rotateY(180deg) translateZ(${this.props.faceSize / 2}px)`},
            {width: `${this.props.faceSize}px`, height: `${this.props.faceSize}px`, backgroundColor: 'aqua', position: 'absolute', transform: `rotateY(90deg) translateZ(${this.props.faceSize / 2}px)`},
            {width: `${this.props.faceSize}px`, height: `${this.props.faceSize}px`, backgroundColor: 'yellow', position: 'absolute', transform: `rotateY(270deg) translateZ(${this.props.faceSize / 2}px)`},
            {width: `${this.props.faceSize}px`, height: `${this.props.faceSize}px`, backgroundColor: 'green', position: 'absolute'},
            {width: `${this.props.faceSize}px`, height: `${this.props.faceSize}px`, backgroundColor: 'purple', position: 'absolute'},
            {width: `${this.props.faceSize}px`, height: `${this.props.faceSize}px`, backgroundColor: 'brown', position: 'absolute'},  
        ], FacesContainerStyle: {
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            transformStyle: 'preserve-3d',
            textAlign: 'center',
            // transform: 'rotateZ(25deg)',
            transition: 'transform 3s ease-in-out',
            height: '400px',
            width: '400px'
        }, MainContainer: {
            height: '400px',
            width: '400px',
            backgroundColor: 'white',
            perspective: '400px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
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
            faces.push(<div id={this.props.id + 'face' + i} key={this.props.id + 'key' + i} style={this.state.faceStyle[i]}>COÑO</div>);
        }
        this.setState({faces: faces});
    } 
  render() {
    return (
      <div className='CubeGenerator'>
          <div className='FacesContainer' style={this.state.FacesContainerStyle}>
            {this.state.faces}
          </div>
      </div>
    )
  }
}
