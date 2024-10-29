import React, { useState, useMemo } from "react";


// Example 2: Demonstrating dependency changes
const Dependency = () => {
    const [multiplier, setMultiplier] = useState(1);
    const [unrelatedState, setUnrelatedState] = useState(0);
    
    const calculatedValue = useMemo(() => {
      console.log("Recalculating value with new multiplier...");
      return Array(5).fill(0)
        .map((_, i) => (i + 1) * multiplier)
        .reduce((a, b) => a + b, 0);
    }, [multiplier]); // Recalculates when multiplier changes
    
    return (
      <div className="p-4 border rounded mt-4">
        <h2 className="text-xl font-bold mb-4">Dependency Example</h2>
        <p className="mb-2">Sum of first 5 numbers × {multiplier}: {calculatedValue}</p>
        <div className="space-x-2">
          <button 
            className="bg-green-500 text-white px-4 py-2 rounded"
            onClick={() => setMultiplier(m => m + 1)}
          >
            Increase Multiplier
          </button>
          <button 
            className="bg-gray-500 text-white px-4 py-2 rounded"
            onClick={() => setUnrelatedState(s => s + 1)}
          >
            Unrelated Update: {unrelatedState}
          </button>
        </div>
      </div>
    );
  };

export default Dependency;