import React from 'react';
import './CircleSelector.css';

export default function CircleSelector(props) {
  return (
    <div className='CircleSelector' style={props.style} >
        <button value={props.value} onClick={props.onClick} />
    </div>
  )
}
