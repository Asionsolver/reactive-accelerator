export default function PreventDefault() {
  return (
    <form
      onSubmit={(e) => {
        console.dir(e);
        e.preventDefault();
        console.log("Form submitted");
      }}
    >
      <input />
      <button>Send</button>
    </form>
  );
}
