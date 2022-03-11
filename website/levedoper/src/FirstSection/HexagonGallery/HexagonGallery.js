import React, { Component } from 'react';

import './HexagonGallery.css';
import { default as IcosahedronFace } from './IcosahedronFace/IcosahedronFace'

export default class HexagonGallery extends Component {
    constructor(props) {
        super(props);
        this.state = ({currentAngle: 0, interval1: '', faces: ''});
        this.rotate = this.rotate.bind(this);
        this.createFaces = this.createFaces.bind(this);
    }
    componentDidMount() {
        const interval = window.setInterval(() => {
            this.rotate();
        }, 3000);
        this.setState({interval1: interval});
        this.createFaces();
    }
    componentWillUnmount() {
        window.clearInterval(this.state.interval1);
    }
    rotate() {
        this.setState({currentAngle: this.state.currentAngle + 60});
        document.getElementById('HexagonGalleryContainer').style = `transform: rotateY(${this.state.currentAngle}deg); transition: transform 3s linear`;
    }
    createFaces() {
        let FacesArray = [];
        for (let i = 0; i < 20; i++) {
            FacesArray.push(<IcosahedronFace id={`icoFace${i}`} key={i} />);
        }
        this.setState({faces: FacesArray});
    }
  render() {
    return (
      <div id="HexagonGallery">
          <div id="HexagonGalleryContainer">
                <div id="HexagonGalleryOne" className='ringFace'><p>CSS</p></div>
                <div id="HexagonGalleryTwo" className='ringFace'><p>REACT</p></div>
                <div id="HexagonGalleryThree" className='ringFace'><p>HTML</p></div>
                <div id="HexagonGalleryFour" className='ringFace'><p>PHP</p></div>
                <div id="HexagonGalleryFive" className='ringFace'><p>JS</p></div>
                <div id="HexagonGallerySix" className='ringFace'><p>C++</p></div>
                <div id="HexagonGalleryCube">
                    {this.state.faces}
                </div>
          </div>
      </div>
    )
  }
}
