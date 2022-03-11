import React, { Component } from 'react'

export default class IcosahedronFace extends Component {
  constructor(props) {
    super(props);
    this.state = ({ numberOfComponent: 0, even: 0, styles: ''});
    this.checkIfShouldBeUpsideDown = this.checkIfShouldBeUpsideDown.bind(this);
    this.getNumberOfComponent = this.getNumberOfComponent.bind(this);
    this.generateStyles = this.generateStyles.bind(this);
  }
  componentDidMount() {
    window.setTimeout(() => {
      this.getNumberOfComponent();
    }, 0);
    window.setTimeout(() => {
      this.checkIfShouldBeUpsideDown();
    }, 100);
    window.setTimeout(() => {
      this.generateStyles();
    }, 0);
  }
  generateStyles() {
    if (this.state.numberOfComponent >= 0 && this.state.numberOfComponent < 6) {
      this.setState({styles: `translateY(-86.60254px) rotateY(${this.state.numberOfComponent * 72}deg) rotateX(55deg) translateZ(60px)`});
    }
    if (this.state.numberOfComponent > 5 && this.state.numberOfComponent < 12) {
      this.setState({styles: `translateY(-7px) rotateY(36deg) rotateZ(180deg) rotateY(${this.state.numberOfComponent * 72}deg)  rotatex(-30deg) translateZ(58px)`});
    }
  }
  // rotate3d(0,2,1,${this.state.numberOfComponent * 72}deg) 
  getNumberOfComponent() {
    const id = this.props.id;
    let numberOfComponent = id.slice(7,20);
    console.log(numberOfComponent);
    numberOfComponent = parseInt(numberOfComponent);
    this.setState({numberOfComponent: numberOfComponent});
  }
  checkIfShouldBeUpsideDown() {
    if (this.state.numberOfComponent % 2 === 0 && this.state.numberOfComponent < 10) {
      this.setState({even: 1});
    } 
  }
  render() {
    return (
      <div className='IcosahedronFace' id={this.props.id}></div>
    )
    // style={{transform: `${this.state.styles}`}}
  }
}
