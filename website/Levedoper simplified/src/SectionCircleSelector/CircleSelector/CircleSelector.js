import React from 'react';
import './CircleSelector.css';

export default function CircleSelector(props) {
  return (
    <button className='CircleSelector' style={props.style} value={props.value} onClick={props.onClick}>

    </button>
  )
}
