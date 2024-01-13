export default function EventHandle() {
    function handleClick() {
      alert('You clicked me!');
    }
  
    return (
      <button onClick={handleClick()}>
        Click me
      </button>
    );
  }
