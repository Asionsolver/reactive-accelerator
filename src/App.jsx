// import { Profile as Card } from "./components/Gallery"

import ResettingEntireSubtree from "./components/preserving_resetting_state/ResettingEntireSubtree";
// import SamePositionResetting from "./components/preserving_resetting_state/SamePositionResetting";

// import PreservingState from "./components/preserving_resetting_state/PreservingState";
// import SamePositionResetting from "./components/preserving_resetting_state/SamePositionResetting";

// import Counters from "./components/preserving_resetting_state/Counters";

// import Counter from "./components/preserving_resetting_state/Counter";

// import NormalizeTravelPlan from "./components/deeply-nested-state/NormalizeTravelPlan";
// import TravelEditable from "./components/duplicationState/TravelEditable";

// import Travel from "./components/duplicationState/Travel";

// import "../src/components/preserving_resetting_state/style.css";

function App() {
  // const [color, setColor] = useState('red');
  // const handleChangeColor = () => {
  //   setColor('blue');
  // };
  // const person = 'Ashis';
  // const age = 25;
  // const size = 200;
  return (
    <>
      {/* <h1>Hello World!</h1> */}

      {/* Mirror State Avoid */}
      {/* <div>
        <MirrorState messageColor={color} />
        <br />
        <button onClick={handleChangeColor}>Change color from parent</button>
      </div> */}

      {/* <Travel /> */}
      {/* <TravelEditable /> */}
      {/* <NormalizeTravelPlan /> */}
      {/* <Counter />
      <Counter /> */}
      {/* <Counters /> */}
      {/* <PreservingState /> */}
      {/* <SamePositionResetting /> */}
      <ResettingEntireSubtree />
    </>
  );
}

export default App;
