import { useState } from "react";
import FancyCounter from "./FancyCounter";

export default function ResettingEntireSubtree() {
    const [isFancy, setIsFancy] = useState(false);
    return (
      <div>
        {isFancy ? (
          <div>
            <FancyCounter isFancy={true} /> 
          </div>
        ) : (
          <section>
            <FancyCounter isFancy={false} />
          </section>
        )}
        <label>
          <input
            type="checkbox"
            checked={isFancy}
            onChange={e => {
              setIsFancy(e.target.checked)
            }}
          />
          Use fancy styling
        </label>
      </div>
    );
}
