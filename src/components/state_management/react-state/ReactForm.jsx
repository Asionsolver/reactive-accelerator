import { useState } from "react";

function submitForm(answer) {
  // Pretend it's hitting the network.
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let shouldError = answer.toLowerCase() !== "rajshahi";
      if (shouldError) {
        reject(new Error("Good guess but a wrong answer. Try again!"));
      } else {
        resolve();
      }
    }, 1500);
  });
}

// eslint-disable-next-line react/prop-types
export default function ReactForm() {
  // visual states: empty, typing, submitting, success, error

  // Non-mandatory data state
  // const [status, setStatus] = useState("empty"); // Because we can control empty or emptyNot by answer state

  // Mandatory data state
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState(null);

  // visual state theke paoa final state

  const [status, setStatus] = useState("typing");

  if (status === "success") return <h1>Thats right!</h1>;

  // handler function

  const handleTextChange = (event) => {
    setError(null);
    // console.log(event.target.value);
    setAnswer(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("submitting");
    try {
      await submitForm(answer);
      setStatus("success");
    } catch (err) {
      // console.error("Error: ",err);
      setStatus("typing");
      setError(err.message);
    }
  };

  return (
    <>
      <h2>City quiz</h2>
      <p>What city is located on two continents?</p>
      <form onSubmit={handleSubmit}>
        <textarea
          value={answer}
          onChange={handleTextChange}
          disabled={status === "submitting"}
        ></textarea>
        <br />
        <button disabled={answer.length === 0 || status === "submitting"}>
          Submit
        </button>
        {status === "submitting" && <p>Loading...</p>}
        {error && <p className="Error">{error}</p>}
      </form>
    </>
  );
}
