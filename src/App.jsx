import "../src/App.css";
// import useSomeAPI from "./api/useSomeAPI";
import Example9 from "./components/escape-hatches/synchronizing-with-effects/you-might-not-need-an-effect/Example9";
import SearchResults from "./components/escape-hatches/synchronizing-with-effects/you-might-not-need-an-effect/Searchresults";

// import ChatRoom from "./components/escape-hatches/synchronizing-with-effects/ChatRoom";

// import { items1, items2 } from "./data/itemsData";

// import Playground from "./components/escape-hatches/synchronizing-with-effects/putting-it-all/PlayGround";
// import Form from "./components/escape-hatches/synchronizing-with-effects/you-might-not-need-an-effect/Example1";

// import Comments from "./components/escape-hatches/synchronizing-with-effects/fetching-data/Comments";

function App() {
  // const [show, setShow] = useState(false);

  // const [color, setColor] = useState('red');
  // const handleChangeColor = () => {
  //   setColor('blue');
  // };
  // const person = 'Ashis';
  // const age = 25;
  // const size = 200;

  // Create chat room component
  // const [show, setShow] = useState(true);

  // example 2
  // const [userId, setUserId] = useState(1);

  // example3
  // const [items, setItems] = useState(items1);

  // example 7
  // const [isOn, setIsOn] = useState(false);

  // example 8
  // const [data, setData] = useState(null);
  // const data = useSomeAPI();

  return (
    <>
      {/* <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button> */}
      {/* {show && <ChatRoom />} */}
      {/* <Comments postId='1' /> */}
      {/* putting it all together */}
      {/* <button onClick={() => setShow(!show)}>
        {show ? "Unmount" : "Mount"} the component
      </button>
      {show && <hr />}
      {show && <Playground />} */}
      {/* Initial three examples */}
      {/* <Form /> */}
      {/* Example 2: Resetting all state when a prop changes */}
      {/* <div>
        <button onClick={() => setUserId(userId === 1 ? 2 : 1)}>
          Switch to Profile No. {userId === 1 ? 2 : 1}
        </button>
      </div>
      <Example2 key={userId} userId={userId} /> */}

      {/* Example 3: Adjusting some state when a prop change */}
      {/* <button onClick={() => setItems(items2)}>Switch to Items2</button>{" "}
      <button onClick={() => setItems(items1)}>Switch to Items1</button>
      <Example3 items={items} /> */}

      {/* Sharing logic between event handlers */}
      {/* <Example4 /> */}

      {/* Sending post request */}
      {/* <Example5 /> */}

      {/* Chains of Components */}
      {/* <Example6 /> */}

      {/* Notifying parent components about state changes */}
      {/* <p>{isOn ? "On" : "Off"}</p>
      <Example7 onChange={setIsOn} /> */}

      {/* Passing data to the parent */}
      {/* <p>{data && data}</p>
      <Example8 data={data} /> */}

      {/* Subscribing to an external store  */}
      {/* <Example9 /> */}

      <SearchResults />

    </>
  );
}

export default App;
