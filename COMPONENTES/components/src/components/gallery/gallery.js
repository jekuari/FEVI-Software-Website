import React from 'react';
import './gallery.css';

import { ImageHolder } from './imageHolder/imageHolder.js';

export class LDgallery extends React.Component{
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         numberOfImage: 0,
    //     }
    // }

    render() {
        return (
            <div>
                {/*GALLERY BUTTON*/}
                <ImageHolder />
                <p>cagajo</p>
                {/*GALLERY BUTTON*/}
            </div>
            
        );
    }
}