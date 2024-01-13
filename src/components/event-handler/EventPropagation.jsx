function Button({ onClick, children }) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        // console.log(e);
        onClick();
      }}
    >
      {children}
    </button>
  );
}

export default function EventPropagation() {
  return (
    <div
      className="Toolbar"
      onClick={() => {
        console.log("You clicked on the toolbar!");
      }}
    >
      <Button onClick={() => console.log("Playing!")}>Play Movie</Button>
      <Button onClick={() => console.log("Uploading!")}>Upload Image</Button>
    </div>
  );
}
