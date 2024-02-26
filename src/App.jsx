// import { useState } from "react";
// import ChatRoom from "./components/escape-hatches/synchronizing-with-effects/ChatRoom";


import Comments from "./components/escape-hatches/synchronizing-with-effects/fetching-data/Comments";

function App() {
  // const [color, setColor] = useState('red');
  // const handleChangeColor = () => {
  //   setColor('blue');
  // };
  // const person = 'Ashis';
  // const age = 25;
  // const size = 200;

  // Create chat room component
  // const [show, setShow] = useState(true);

  return (
    <>
      {/* <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button> */}
      {/* {show && <ChatRoom />} */}

      <Comments postId='1' />

    </>
  );
}

export default App;
