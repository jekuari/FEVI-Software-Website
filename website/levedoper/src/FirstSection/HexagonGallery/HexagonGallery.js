import React, { Component } from 'react';

import './HexagonGallery.css';
import { default as IcosahedronFace } from './IcosahedronFace/IcosahedronFace'

export default class HexagonGallery extends Component {
    constructor(props) {
        super(props);
        this.state = ({currentAngle: 0, interval1: '', faces: ''});
        this.createFaces = this.createFaces.bind(this);
        this.handleHover = this.handleHover.bind(this);
    }
    handleHover() {
        this.props.onHover('Conocimientos');
    }

    componentDidMount() {
        this.createFaces();
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
      <div id="HexagonGallery" onMouseEnter={this.handleHover}>
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
