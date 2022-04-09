import React, { Component } from 'react';
import './SecondSection.css';

import waves from './waves.svg';


import firstStage from './resources/firstStage.webp';
import wireframe from './resources/wireframe.webp';
import thirdStage from './resources/thirdStage.webp';
import fourthStage from './resources/fourthStage.webp';
import beneficiosButton from './resources/beneficiosButton.webp';
import OrangeWheel from './resources/OrangeWheel.webp';
import WhatsappLogo from './resources/whatsapp.webp';

import PNGfirstStage from './resources/firstStage.png';
import PNGwireframe from './resources/wireframe.png';
import PNGthirdStage from './resources/thirdStage.png';
import PNGfourthStage from './resources/fourthStage.png';
import PNGbeneficiosButton from './resources/beneficiosButton.png';
import PNGOrangeWheel from './resources/OrangeWheel.png';
import PNGWhatsappLogo from './resources/whatsapp.png';

export default class SecondSection extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      currentScroll: 0,
      styleLeft: [],
      styleCenter: [],
      styleRight: {}
    });
    this.appearElement = this.appearElement.bind(this);
  }
  componentDidMount() {
    const eventListener1 = window.addEventListener('scroll', () => {
      this.appearElement();
    });
    this.setState({ eventListener1: eventListener1 });
    this.appearElement();
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.state.eventListener1);
  }
  appearElement() {
    let arrayOfNumbers = [];
    let styleLeft = [];
    let styleRight = [];
    let styleCenter = [];
    for (let i = 0; i < document.getElementsByClassName('MethodologyNumber').length; i++) {
      arrayOfNumbers.push(document.getElementsByClassName('MethodologyNumber')[i]);
      styleLeft.push({ transform: 'translateX(-10rem)', opacity: '0' });
      styleRight.push({ transform: 'translateX(10rem)', opacity: '0' });
      styleCenter.push({ opacity: '0' });
    }
    function getOffset(el) {
      const rect = el.getBoundingClientRect();
      return {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY
      };
    }
    let scrollPos = document.documentElement.scrollTop + window.innerHeight * 0.8;
    const numbersOfVisible = [];
    arrayOfNumbers.forEach((element) => {
      if (scrollPos > getOffset(element).top) {
        numbersOfVisible.push(element.firstChild.innerHTML);
      }
    });
    numbersOfVisible.forEach((x) => {
      if (styleLeft[x - 1] === { transform: 'translateX(0rem)', opacity: '1' }) {
        styleLeft.splice(x - 1, 1, { transform: 'translateX(-10rem)', opacity: '0' });
        styleRight.splice(x - 1, 1, { transform: 'translateX(10rem)', opacity: '0' });
        styleCenter.splice(x - 1, 1, { opacity: '0' });
      } else {
        styleLeft.splice(x - 1, 1, { transform: 'translateX(0rem)', opacity: '1' });
        styleRight.splice(x - 1, 1, { transform: 'translateX(0rem)', opacity: '1' });
        styleCenter.splice(x - 1, 1, { opacity: '1' });
      }

    });
    this.setState({ styleLeft: styleLeft, styleRight: styleRight, styleCenter: styleCenter });
  }
  render() {
    return (
      <div id="SecondSectionContainer">
        <div id="SecondSection">
          <h2>Proceso de desarrollo</h2>
          {!this.props.isMobile ? 
          <div id="SecondSectionMethodology">
          <div className='flex threeSecCon center secondSectionLeft'>
            <div className='MethodologyText animateLeft' style={this.state.styleLeft[0]}>
              <h4 className='textRight'><strong>Platicanos de tu p&aacute;gina</strong></h4>
              <p className='alisele'>Con tu ayuda, identificaremos lo que tu p&aacute;gina necesita, te solicitaremos logotipos y recursos gr&aacute;ficos para el dise&ntilde;o de la misma.</p>
            </div>
            <div className='flex center animateLeft secondSectionNumber' style={this.state.styleCenter[0]}><p className='MethodologyNumber'><strong>1</strong></p></div>
            <div className='flex center parent animateLeft secondImgWrapper' style={this.state.styleRight[0]}><img src={this.props.webpSupport ? firstStage : PNGfirstStage} alt="Wireframe" className='MethodologyImage' /></div>
          </div>
          <div className='flex threeSecCon center secondSectionLeft'>
            <div className='flex center parent animateLeft secondImgWrapper  ' style={this.state.styleLeft[1]}><img src={this.props.webpSupport ? wireframe : PNGwireframe} alt="Wireframe" className='MethodologyImage' /></div>
            <div className='flex center animateLeft secondSectionNumber' style={this.state.styleCenter[1]}><p className='MethodologyNumber'><strong>2</strong></p></div>
            <div className='MethodologyText animateLeft' style={this.state.styleRight[1]}>
              <h4><strong>Wireframe</strong></h4>
              <p>Un wireframe es un bosquejo de c&oacute;mo podr&iacute;a lucir tu p&aacute;gina, te lo enviaremos en formato PDF para que nos digas qu&eacute; te gustar&iacute;a que fuera diferente, hacer cambios y que luzca como tu quieres.</p>
            </div>
          </div>
          <div className='flex threeSecCon center secondSectionLeft'>
            <div className='MethodologyText  animateLeft  ' style={this.state.styleLeft[2]}>
              <h4 className='textRight'><strong>Inicio del proyecto</strong></h4>
              <p className='alisele'>En esta etapa comenzamos con el dise&ntilde;o de la p&aacute;gina, se crea la versi&oacute;n de escritorio sin animaciones o funcionalidad. <br />Te entregaremos un link para que puedas ver el estado actual de tu p&aacute;gina.</p>
            </div>
            <div className='flex center animateLeft secondSectionNumber' style={this.state.styleCenter[2]}><p className='MethodologyNumber'><strong>3</strong></p></div>
            <div className='flex center animateLeft secondImgWrapper' style={this.state.styleRight[2]}><img src={this.props.webpSupport ? thirdStage : PNGthirdStage} alt="Wireframe" className='MethodologyImage' /></div>
          </div>
          <div className='flex threeSecCon center secondSectionLeft'>
            <div className='flex center parent  animateLeft secondImgWrapper  ' style={this.state.styleLeft[3]}><div className='flex center parent'><img src={this.props.webpSupport ? fourthStage : PNGfourthStage} alt="Wireframe" className='MethodologyImage' /><img src={beneficiosButton} alt="" className="animatedBeneficiosButton" /><img src={this.props.webpSupport ? OrangeWheel : OrangeWheel} alt="" className='OrangeWheel' /></div></div>
            <div className='flex center animateLeft secondSectionNumber' style={this.state.styleCenter[3]}><p className='MethodologyNumber'><strong>4</strong></p></div>
            <div className='MethodologyText animateLeft' style={this.state.styleRight[3]}>
              <h4><strong>Desarrollo</strong></h4>
              <p>Empezamos a agregar funcionalidad, animaciones, en esencia, toda la magia detr&aacute;s del sitio. Hacemos correcciones, cambios y ediciones a la p&aacute;gina, siempre en constante contacto contigo.</p>
            </div>
          </div>
          <div className='flex threeSecCon center secondSectionLeft'>
            <div className='MethodologyText  animateLeft' style={this.state.styleLeft[4]}>
              <h4 className='textRight'><strong>Finalizaci&oacute;n</strong></h4>
              <p className='alisele'>Al finalizar el proyecto, te entregaremos el c&oacute;digo fuente, contrase&ntilde;as de acceso, asesor&iacute;a sobre la operaci&oacute;n del sitio, as&iacute; como todo recurso necesario para el correcto funcionamiento del sitio.</p>
            </div>
            <div className='flex center animateLeft secondSectionNumber' style={this.state.styleCenter[4]}><p className='MethodologyNumber'><strong>5</strong></p></div>
            <div className='flex center parent animateLeft secondImgWrapper' style={this.state.styleRight[4]}><div className='flex center parent overflowhide'><img src={this.props.webpSupport ? fourthStage : PNGfourthStage} alt="Wireframe" className='MethodologyImage' /><img src={this.props.webpSupport ? beneficiosButton : PNGbeneficiosButton} alt="" className="animatedBeneficiosButton" /><img src={this.props.webpSupport ? OrangeWheel : PNGOrangeWheel} alt="" className='OrangeWheel' /><img src={this.props.webpSupport ? WhatsappLogo : PNGWhatsappLogo} alt="" className='OrangeWhatsapp' /></div></div>
          </div>
        </div> : 
        // ORDEN PARA MOVIL
        <div id="SecondSectionMethodology">
        <div className='flex threeSecCon center secondSectionLeft'>
        <div className='flex center animateLeft secondSectionNumber' style={this.state.styleCenter[0]}><p className='MethodologyNumber'><strong>1</strong></p></div>
          <div className='MethodologyText animateLeft' style={this.state.styleLeft[0]}>
            <h4 className='textRight'><strong>Platicanos de tu p&aacute;gina</strong></h4>
            <p>Con tu ayuda, identificaremos lo que tu p&aacute;gina necesita, te solicitaremos logotipos y recursos gr&aacute;ficos para el dise&ntilde;o de la misma.</p>
          </div>
          <div className='flex center parent animateLeft secondImgWrapper' style={this.state.styleRight[0]}><img src={this.props.webpSupport ? firstStage : PNGfirstStage} alt="Wireframe" className='MethodologyImage' /></div>
        </div>
        <div className='flex threeSecCon center secondSectionLeft'>
          <div className='flex center animateLeft secondSectionNumber' style={this.state.styleCenter[1]}><p className='MethodologyNumber'><strong>2</strong></p></div>
          <div className='MethodologyText animateLeft' style={this.state.styleRight[1]}>
            <h4><strong>Wireframe</strong></h4>
            <p>Un wireframe es un bosquejo de c&oacute;mo podr&iacute;a lucir tu p&aacute;gina, te lo enviaremos en formato PDF para que nos digas qu&eacute; te gustar&iacute;a que fuera diferente, hacer cambios y que luzca como tu quieres.</p>
          </div>
          <div className='flex center parent animateLeft secondImgWrapper  ' style={this.state.styleLeft[1]}><img src={this.props.webpSupport ? wireframe : PNGwireframe} alt="Wireframe" className='MethodologyImage' /></div>
        </div>
        <div className='flex threeSecCon center secondSectionLeft'>
        <div className='flex center animateLeft secondSectionNumber' style={this.state.styleCenter[2]}><p className='MethodologyNumber'><strong>3</strong></p></div>
          <div className='MethodologyText  animateLeft  ' style={this.state.styleLeft[2]}>
            <h4 className='textRight'><strong>Inicio del proyecto</strong></h4>
            <p>En esta etapa comenzamos con el dise&ntilde;o de la p&aacute;gina, se crea la versi&oacute;n de escritorio sin animaciones o funcionalidad. <br />Te entregaremos un link para que puedas ver el estado actual de tu p&aacute;gina.</p>
          </div>
          <div className='flex center animateLeft secondImgWrapper' style={this.state.styleRight[2]}><img src={this.props.webpSupport ? thirdStage : PNGthirdStage} alt="Wireframe" className='MethodologyImage' /></div>
        </div>
        <div className='flex threeSecCon center secondSectionLeft'>
          <div className='flex center animateLeft secondSectionNumber' style={this.state.styleCenter[3]}><p className='MethodologyNumber'><strong>4</strong></p></div>
          <div className='MethodologyText animateLeft' style={this.state.styleRight[3]}>
            <h4><strong>Desarrollo</strong></h4>
            <p>Empezamos a agregar funcionalidad, animaciones, en esencia, toda la magia detr&aacute;s del sitio. Hacemos correcciones, cambios y ediciones a la p&aacute;gina, siempre en constante contacto contigo.</p>
          </div>
          <div className='flex center parent  animateLeft secondImgWrapper  ' style={this.state.styleLeft[3]}><div className='flex center parent'><img src={this.props.webpSupport ? fourthStage : PNGfourthStage} alt="Wireframe" className='MethodologyImage' /><img src={this.props.webpSupport ? beneficiosButton : PNGbeneficiosButton} alt="" className="animatedBeneficiosButton" /><img src={this.props.webpSupport ? OrangeWheel : PNGOrangeWheel} alt="" className='OrangeWheel' /></div></div>
        </div>
        <div className='flex threeSecCon center secondSectionLeft'>
        <div className='flex center animateLeft secondSectionNumber' style={this.state.styleCenter[4]}><p className='MethodologyNumber'><strong>5</strong></p></div>
          <div className='MethodologyText  animateLeft' style={this.state.styleLeft[4]}>
            <h4 className='textRight'><strong>Finalizaci&oacute;n</strong></h4>
            <p>Al finalizar el proyecto, te entregaremos el c&oacute;digo fuente, contrase&ntilde;as de acceso, asesor&iacute;a sobre la operaci&oacute;n del sitio, as&iacute; como todo recurso necesario para el correcto funcionamiento del sitio.</p>
          </div>
          <div className='flex center parent animateLeft secondImgWrapper' style={this.state.styleRight[4]}><div className='flex center parent overflowhide'><img src={this.props.webpSupport ? fourthStage : PNGfourthStage} alt="Wireframe" className='MethodologyImage' /><img src={this.props.webpSupport ? beneficiosButton : PNGbeneficiosButton} alt="" className="animatedBeneficiosButton" /><img src={this.props.webpSupport ? OrangeWheel : PNGOrangeWheel} alt="" className='OrangeWheel' /><img src={this.props.webpSupport ? WhatsappLogo : PNGWhatsappLogo} alt="" className='OrangeWhatsapp' /></div></div>
        </div>
      </div>
          }
          

        </div>
      </div>
    )
  }
}
