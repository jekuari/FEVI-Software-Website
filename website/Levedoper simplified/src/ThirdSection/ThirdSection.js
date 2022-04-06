import React, { Component } from 'react';
import './ThirdSection.css';

import { default as SendMessage } from './SendMessage/SendMessage';

import phoneMockup from '../Resources/phoneMockup.svg';

export default class ThirdSection extends Component {
     constructor(props) {
          super(props);
          this.state = ({topOffset: 0, currentScroll: 0, height: 0, firstElementStyle: {}, secondElementStyle: {}, thirdElementStyle: {}, fourthElementStyle: {}});
          this.getOffset = this.getOffset.bind(this);
          this.setCurrentScroll = this.setCurrentScroll.bind(this);
          this.setHeight = this.setHeight.bind(this);
          this.moveFirstElement = this.moveFirstElement.bind(this);
          this.moveSecondElement = this.moveSecondElement.bind(this);
          this.moveThirdElement = this.moveThirdElement.bind(this);
          this.moveFourthElement = this.moveFourthElement.bind(this);
     }
     componentDidMount() {
          this.getOffset(document.getElementById('ThirdSection'));
          this.setCurrentScroll();
          this.setHeight();
          this.moveFirstElement();
          this.moveSecondElement();
          this.moveThirdElement();
          this.moveFourthElement();

          const eventListener1 = window.addEventListener('scroll',() => {
               this.getOffset(document.getElementById('ThirdSection'));
               this.setCurrentScroll();
               this.setHeight();
               this.moveFirstElement();
               this.moveSecondElement();
               this.moveThirdElement();
               this.moveFourthElement();

          });
          this.setState({eventListener1: eventListener1});
     }

     componentWillUnmount() {
          window.removeEventListener('resize', this.state.eventListener1);
     }

     setHeight() {
          this.setState({height: document.getElementById('ThirdSection').offsetHeight});
     }

     setCurrentScroll() {
          let scrollPos = document.documentElement.scrollTop;
          this.setState({currentScroll: scrollPos});
     }

     getOffset(el) {
          const rect = el.getBoundingClientRect();
          this.setState({topOffset: rect.top + window.scrollY});
     }

     moveFirstElement() {
          let translation = ((document.documentElement.scrollTop) - (this.state.topOffset - (window.getComputedStyle(document.body).getPropertyValue('font-size').replace('px','') * 5)))/(this.state.height - document.getElementById('ThirdSectionStickyContainer').offsetHeight);
          if (translation < 0) {
               translation = 0;
          } else if ( translation > 0.250) {
               translation = 0.250;
          }
          this.setState({firstElementStyle: {position: 'absolute', left: 0, opacity: `${(translation * 8)}`, transform: `translateX(${translation * (this.props.isMobile ? 7 : 7)}rem) translateY(17.5vh)`}});
     }

     moveSecondElement() {
          let translation = ((document.documentElement.scrollTop) - (this.state.topOffset - (window.getComputedStyle(document.body).getPropertyValue('font-size').replace('px','') * 5)))/(this.state.height - document.getElementById('ThirdSectionStickyContainer').offsetHeight);
          if (translation < 0.25) {
               translation = 0.25;
          } else if ( translation > 0.50) {
               translation = 0.50;
          }
          this.setState({secondElementStyle: {position: 'absolute', right: 0, opacity: `${((translation - 0.250) * 8)}`, transform: `translateX(-${(translation - 0.250) * (this.props.isMobile ? 7 : 7)}rem) translateY(32.5vh)`}});
     }

     moveThirdElement() {
          let translation = ((document.documentElement.scrollTop) - (this.state.topOffset - (window.getComputedStyle(document.body).getPropertyValue('font-size').replace('px','') * 5)))/(this.state.height - document.getElementById('ThirdSectionStickyContainer').offsetHeight);
          if (translation < 0.5) {
               translation = 0.5;
          } else if ( translation > 0.75) {
               translation = 0.75;
          }
          this.setState({thirdElementStyle: {position: 'absolute', left: 0, opacity:  `${((translation - 0.5) * 8)}`, transform: `translateX(${(translation - 0.5) * (this.props.isMobile ? 7 : 7)}rem) translateY(47.5vh)`}});
     }

     moveFourthElement() {
          let translation = ((document.documentElement.scrollTop) - (this.state.topOffset - (window.getComputedStyle(document.body).getPropertyValue('font-size').replace('px','') * 5)))/(this.state.height - document.getElementById('ThirdSectionStickyContainer').offsetHeight);
          if (translation < 0.75) {
               translation = 0.75;
          } else if ( translation > 1) {
               translation = 1;
          }
          this.setState({fourthElementStyle: {position: 'absolute', right: 0, opacity: `${((translation - 0.75) * 8)}`, transform: `translateX(-${(translation - 0.75) * (this.props.isMobile ? 7 : 7)}rem) translateY(62.5vh)`}});
     }

  render() {
    return (
      <div id="ThirdSection">
           
          <div id='ThirdSectionStickyContainer'>
               <img src={phoneMockup} alt="" className='phoneMockup'/>
               <div style={this.state.firstElementStyle} className="MessageBubble leftMessage">
               <h3>&iquest;C&oacute;mo empezamos?</h3>
               </div>
               <div style={this.state.secondElementStyle} className="MessageBubble rightMessage" >
               <h3>M&aacute;ndame un Whatsapp.</h3>
               </div>
               <div style={this.state.thirdElementStyle} className="MessageBubble leftMessage">
               <h3>Okay! &iquest;C&oacute;mo?</h3>
               </div>
               <div style={this.state.fourthElementStyle} className="MessageBubble rightMessage">
               <h3>Escr&iacute;belo abajo y env&iacute;alo.</h3>
               </div>
               <div className='SendAMessageContainer'>
                    <SendMessage />
               </div>
          </div>
      </div>
    )
  }
}
