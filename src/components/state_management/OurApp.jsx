import Form from "./Form";
import "./style.css"

const statuses = ["empty", "typing", "submitting", "success", "error"];

function App() {
    return (
        <div>
            {statuses.map((status) => (
                <Form key={status} status={status} />
            ))}
        </div>
    );
}

export default App;