import React, { useState, useMemo } from "react";

// Example 3: Complex computation with object return
const Complex = () => {
    const [baseNumber, setBaseNumber] = useState(10);
    
    const complexCalculation = useMemo(() => {
      console.log("Performing complex calculation...");
      return {
        square: baseNumber * baseNumber,
        cube: baseNumber * baseNumber * baseNumber,
        sqrt: Math.sqrt(baseNumber),
        factorial: Array(baseNumber).fill(0)
          .reduce((acc, _, idx) => acc * (idx + 1), 1)
      };
    }, [baseNumber]);
    
    return (
      <div className="p-4 border rounded mt-4">
        <h2 className="text-xl font-bold mb-4">Complex Calculation Example</h2>
        <div className="space-y-2">
          <p>Base Number: {baseNumber}</p>
          <p>Square: {complexCalculation.square}</p>
          <p>Cube: {complexCalculation.cube}</p>
          <p>Square Root: {complexCalculation.sqrt.toFixed(2)}</p>
          <p>Factorial: {complexCalculation.factorial}</p>
        </div>
        <button 
          className="bg-purple-500 text-white px-4 py-2 rounded mt-2"
          onClick={() => setBaseNumber(b => b + 1)}
        >
          Increase Base Number
        </button>
      </div>
    );
  };

export default Complex;