import React, {useState, useEffect} from 'react';
import './SendMessage.css';

export default function SendMessage() {
     const [text, setText] = useState('');
     const handleChange = ({ target }) => {
          setText(target.value);
     };
     const handleSubmit = (event) => {
          event.preventDefault();
          window.open(`https://api.whatsapp.com/send?phone=524427212877&text=${encodeURI(text)}`);
          event.target.style = "border-color: black; background-color: green";
          window.setTimeout(() => {
               event.target.style = "";
          }, 200);
     };
  return (
         <form className='SendMessage'>
              <input type={'text'} placeholder="Escribe tu mensaje..." value={text} onChange={handleChange} className="SendMessageInput" />
              <input type="button" onClick={handleSubmit} value="enviar" className="SendMessageSubmit" />
         </form>
  )
}
