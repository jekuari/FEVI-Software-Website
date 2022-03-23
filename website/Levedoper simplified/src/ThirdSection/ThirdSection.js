import React, { Component } from 'react';
import './ThirdSection.css';

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
          } else if ( translation > 0.125) {
               translation = 0.125;
          }
          this.setState({firstElementStyle: {position: 'absolute', left: 0, opacity: `${(translation * 8)}`, transform: `translateX(${translation * (this.props.isMobile ? 5 : 20)}rem) translateY(5vh)`}});
     }

     moveSecondElement() {
          let translation = ((document.documentElement.scrollTop) - (this.state.topOffset - (window.getComputedStyle(document.body).getPropertyValue('font-size').replace('px','') * 5)))/(this.state.height - document.getElementById('ThirdSectionStickyContainer').offsetHeight);
          if (translation < 0.125) {
               translation = 0.125;
          } else if ( translation > 0.25) {
               translation = 0.25;
          }
          this.setState({secondElementStyle: {position: 'absolute', right: 0, opacity: `${((translation - 0.125) * 8)}`, transform: `translateX(-${(translation - 0.125) * (this.props.isMobile ? 5 : 20)}rem) translateY(25vh)`}});
     }

     moveThirdElement() {
          let translation = ((document.documentElement.scrollTop) - (this.state.topOffset - (window.getComputedStyle(document.body).getPropertyValue('font-size').replace('px','') * 5)))/(this.state.height - document.getElementById('ThirdSectionStickyContainer').offsetHeight);
          if (translation < 0.25) {
               translation = 0.25;
          } else if ( translation > 0.375) {
               translation = 0.375;
          }
          this.setState({thirdElementStyle: {position: 'absolute', left: 0, opacity:  `${((translation - 0.250) * 8)}`, transform: `translateX(${(translation - 0.250) * (this.props.isMobile ? 5 : 20)}rem) translateY(45vh)`}});
     }

     moveFourthElement() {
          let translation = ((document.documentElement.scrollTop) - (this.state.topOffset - (window.getComputedStyle(document.body).getPropertyValue('font-size').replace('px','') * 5)))/(this.state.height - document.getElementById('ThirdSectionStickyContainer').offsetHeight);
          if (translation < 0.375) {
               translation = 0.375;
          } else if ( translation > 0.5) {
               translation = 0.5;
          }
          this.setState({fourthElementStyle: {position: 'absolute', right: 0, opacity: `${((translation - 0.375) * 8)}`, transform: `translateX(-${(translation - 0.375) * (this.props.isMobile ? 5 : 20)}rem) translateY(65vh)`}});
     }

  render() {
    return (
      <div id="ThirdSection">
          <div id='ThirdSectionStickyContainer'>
               <div style={this.state.firstElementStyle} className="MessageBubble">
               <h2 className='leftMessage'>&iquest;C&oacute;mo empezamos?</h2>
               </div>
               <div style={this.state.secondElementStyle} className="MessageBubble">
               <h2 className='rightMessage'>M&aacute;ndame un Whatsapp.</h2>
               </div>
               <div style={this.state.thirdElementStyle} className="MessageBubble">
               <h2 className='leftMessage'>Okay! ¿Cuál es?</h2>
               </div>
               <div style={this.state.fourthElementStyle} className="MessageBubble">
               <h2 className='rightMessage'><a href="https://api.whatsapp.com/send?phone=524427212877&text=Hola!%20Me%20gustar%C3%ADa%20obtener%20informaci%C3%B3n%20sobre%20una%20p%C3%A1gina">Whatsapp</a></h2>
               </div>
          </div>
      </div>
    )
  }
}
