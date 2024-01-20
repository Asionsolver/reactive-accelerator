import Form from "./Form";
import "./style.css";

const statuses = ["empty", "typing", "submitting", "success", "error"];

export default function OurApp() {
    return (
        <div>
            {statuses.map((status) => (
                <Form key={status} status={status} />
            ))}
        </div>
    );
}
