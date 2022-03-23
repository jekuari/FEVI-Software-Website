import './PersonalCard.css';

import React, { Component } from 'react';

export default class PersonalCard extends Component {
    constructor(props) {
        super(props);
        this.state = ({h3Style: {textShadow: '2px 2px #009189'}, iteration: 0});
        this.moveTextShadow = this.moveTextShadow.bind(this);
    }
    componentDidMount() {
        // const stylesInterval1 = window.setInterval(() => {
        //     this.moveTextShadow();
        // }, 200);
        // this.setState({stylesInterval1: stylesInterval1});
    }
    moveTextShadow() {
        if (this.state.iteration === 0) {
            this.setState({h3Style: {textShadow: '2px 2px var(--website-blue)'}});
            this.setState({iteration: 1});
        } else {
            this.setState({h3Style: {textShadow: '-2px 2px var(--website-blue)'}});
            this.setState({iteration: 0});
        }
    }
    componentWillUnmount() {
        // clearInterval(this.state.stylesInterval1);
    }
  render() {
    return (
      <div className='PersonalCard' style={this.props.alignment === 'right' && this.props.isMobile === true ? {flexDirection: 'row-reverse'} : {}} >
          <img src={this.props.image} alt="Desarrollador web" /><br/>
          <div className='PersonalCardDescriptionContainer'>
            <h3 style={this.state.h3Style}>{this.props.devName}</h3><br/>
            <p>{this.props.devAge}</p><br/>
              <p>{this.props.devRole}<strong style={{color: 'var(--website-blue)', fontWeight: 'bold'}}>DEVELOPER</strong></p>
          </div>
          
      </div>
    )
  }
}
