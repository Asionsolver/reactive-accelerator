// import { Profile as Card } from "./components/Gallery"
// import Gallery from "./components/Gallery"
// import Test from "./components/Test"
// import Date from "./components/Date"

// import Information from "./components/Information"

// import Avatar from './components/props/Avatar';
import Profile from './components/props/Profile';

function App() {
  const person = 'Ashis';
  const age = 25;
  const size = 200;
  return (
    <>
      <h1>Hello World!</h1>
      {/* <Gallery />
      <Card />
      <Test /> */}
      {/* <Date/> */}
      {/* <Information /> */}
      <Profile person = {person} age = {age} size = {size}/>
    </>
  )
}

export default App;

