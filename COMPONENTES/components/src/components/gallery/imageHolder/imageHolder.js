import React from 'react';

export class ImageHolder extends React.Component{
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         imageNumber: this.props.imageNumber,
    //     };
    // }
    render() { 
        const sourceFolder = window.location.href;
        const images = [
            sourceFolder+'andres.png',
            sourceFolder+'fere.png',
            sourceFolder+'wozniak.jpg'
        ];
        return (
            <div>
                <img src={sourceFolder+'/'} alt="galleryImage" />
                <p>image</p>
            </div>
        );
    }
}