import { useRef } from "react";

export default function Counter() {
  console.log("Rendering...");
  let ref = useRef(0);
  const handleClick = () => {
    ref.current = ref.current + 1;
    console.log("Button clicked " + ref.current + " times");
  };
  {
    return <button onClick={handleClick}>Click me!</button>;
  }
}
