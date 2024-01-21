import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function MirrorState({ messageColor }) {
  const [color, setColor] = useState(messageColor);
  const handleChange = () => {
    setColor("#1b1b1b");
  };

  return (
    <div>
      <div style={{ color }}>Hello Reactive World!</div>
      <br />
      <button onClick={handleChange}>Change color child</button>
    </div>
  );
}
