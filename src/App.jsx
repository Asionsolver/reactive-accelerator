import { useState } from "react";
// import ChatRoom from "./components/escape-hatches/synchronizing-with-effects/ChatRoom";

import Playground from "./components/escape-hatches/synchronizing-with-effects/putting-it-all/PlayGround";

// import Comments from "./components/escape-hatches/synchronizing-with-effects/fetching-data/Comments";

function App() {
  const [show, setShow] = useState(false);

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

      {/* <Comments postId='1' /> */}

      <button onClick={() => setShow(!show)}>
        {show ? "Unmount" : "Mount"} the component
      </button>
      {show && <hr />}
      {show && <Playground />}
    </>
  );
}

export default App;
