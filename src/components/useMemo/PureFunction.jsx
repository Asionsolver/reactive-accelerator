import React, { useMemo, useState } from "react";

// Example 1: Simple pure function with no arguments
const PureFunction = () => {
    const [count, setCount] = useState(0);
    
    // // Pure function that calculates a value without arguments
    const expensiveValue = useMemo(() => {
      console.log("Calculating expensive value...");
      let result = 0;
      for (let i = 0; i < 1000000; i++) {
        result += Math.random();
      }
      return result;
    }, []);  // Empty dependencies array - only calculates once

    // const expensiveValue = () =>{
    //   console.log("Calculating expensive value...");
    //   let result = 0;
    //   for (let i = 0; i < 1000000; i++) {
    //     result += Math.random();
    //   }
    //   return result;
    // }
    
    return (
      <div className="p-4 border rounded">
        <h2 className="text-xl font-bold mb-4">Simple Pure Function Example</h2>
        <p className="mb-2">Expensive Calculated Value: {expensiveValue.toFixed(2)}</p>
        <button 
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => setCount(c => c + 1)}
        >
          Increment Count: {count}
        </button>
        <p className="mt-2 text-gray-600">
          Note: The expensive value stays the same despite re-renders
        </p>
      </div>
    );
  };

export default PureFunction;