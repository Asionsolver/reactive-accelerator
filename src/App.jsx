// import { Profile as Card } from "./components/Gallery"

import NormalizeTravelPlan from "./components/deeply-nested-state/NormalizeTravelPlan";
// import TravelEditable from "./components/duplicationState/TravelEditable";

// import Travel from "./components/duplicationState/Travel";

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
      <NormalizeTravelPlan />
    </>
  );
}

export default App;
