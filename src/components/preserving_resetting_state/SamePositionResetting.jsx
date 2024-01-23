import { useState } from "react";
import Counter from "./Counter";

export default function SamePositionResetting() {
    const [isPaused, setIsPaused] = useState(false);
    return (
      <div>
        {isPaused ? (
          <p>See you later!</p> 
        ) : (
          <Counter /> 
        )}
        <label>
          <input
            type="checkbox"
            checked={isPaused}
            onChange={e => {
              setIsPaused(e.target.checked)
            }}
          />
          Take a break
        </label>
      </div>
    );
}
