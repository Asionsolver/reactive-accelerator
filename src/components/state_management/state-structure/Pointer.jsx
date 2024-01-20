import { useState } from "react";

export default function Pointer() {
  // const [x, setX] = useState(0);
  // const [y, setY] = useState(0);
  const [pointer, setPointer] = useState({
    x: 0,
    y: 0,
  });

  const handlePointerMove = (event) => {
    //   setX(event.clientX);
    //   setY(event.clientY);
    
    // When you saw group of state, you can use object to store them.
    setPointer({
      x: event.clientX,
      y: event.clientY,
    });
  };
  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
      }}
      onMouseMove={handlePointerMove}
    >
      <div
        style={{
          position: "absolute",
          backgroundColor: "red",
          borderRadius: "50%",
          left: -10,
          top: -10,
          width: 40,
          height: 40,
          // transform: `translate(${x}px, ${y}px)`,
          transform: `translate(${pointer.x}px, ${pointer.y}px)`,
        }}
      />
    </div>
  );
}
