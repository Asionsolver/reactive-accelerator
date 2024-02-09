import { useRef } from 'react';
import MyInput from './MyInput';

export default function Exposing() {
  const inputRef = useRef(null);

  
  
  function handleClick() {
    inputRef.current.focus();

    // set background color yellow
    inputRef.current?.setBorderRadius('20px');
    
    // set color red
    inputRef.current?.setColor('red');
    
  }

  return (
    <>
     <MyInput type='text' placeholder = 'Enter name' ref={inputRef} />
      <button onClick={handleClick}>
        Focus the input
      </button>
    </>
  );
}
