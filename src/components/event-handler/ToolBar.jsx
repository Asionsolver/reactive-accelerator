export default function Toolbar() {
   
  return (
    <div
      className="Toolbar"
      onClick={() => {
        ("You clicked on the toolbar!");
      }}
    >
      <button onClick={() => console.log("Playing!")}>Play Movie</button>
      <button onClick={() => console.log("Uploading!")}>Upload Image</button>
    </div>
  );
}
