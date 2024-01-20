import { useState } from "react";

export default function Form() {
  const [input, setInput] = useState([{ id: 1, label: "input" }]);

  const handleAddInput = () => {
    const newId = input[input.length - 1].id + 1;
    setInput([...input, { id: newId, label: "input" }]);
  };
  return (
    <div>
      {input.map((input) => (
        <div key={input.id} style={{ marginBottom: "5px", }}>
          <input type="text" label={input.label} />
        </div>
      ))}

      <div style={{ marginTop: "20px" }}>
        <button onClick={handleAddInput}>Add Input</button>
      </div>
    </div>
  );
}
