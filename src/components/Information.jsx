const person = {
  name: 'Gregorio Y. Zara',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

const styleOne = {
  backgroundColor: 'black',
  color: '#fff',
  padding: '1.5rem',
  listStyle: 'none',
  fontWeight: 'semibold'
};

const styleTwo = {
  backgroundColor: 'pink',
  color: '#fff',
  padding: '1.5rem',
  listStyle: 'none',
  fontWeight: 'semibold'
};


export default function Information() {
  
  
  const color = 'pink';
  // ! another way to do it. This is called a logical/Controller operator. This is the best practices.
  let style = '';
  if (color === 'pink'){
    style = styleTwo;
  } else {
    style = styleOne;
  }
  return (
    <div style={person.theme}>
      <h1>{person.name}s Todos</h1>
      <img
        className="avatar"
        src="https://i.imgur.com/7vQD0fPs.jpg"
        alt="Gregorio Y. Zara"
      />
      {/* <ul style={color === 'pink' ? styleTwo : styleOne}> */}
      <ul style={style}>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  )
}
