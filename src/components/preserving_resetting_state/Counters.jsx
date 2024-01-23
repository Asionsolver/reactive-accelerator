import { useState } from 'react';
import ResettingState from './ResettingState';
import './style.css';

export default function Counters() {
  const [showB, setShowB] = useState(true);
  return (
    <div>
      <ResettingState />
      {showB && <ResettingState />} 
      <label>
        <input 
          type="checkbox"
          checked={showB}
          onChange={e => {
            setShowB(e.target.checked)
          }}
        />
        Render the second counter
      </label>
    </div>
  );
}


