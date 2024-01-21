import { useState } from "react";

const initialItems = [
  { title: "Berger", id: 0 },
  { title: "Chicken-Cops", id: 1 },
  { title: "Biriani", id: 2 },
];

export default function Travel() {
  const [items, setItems] = useState(initialItems);
  const [selectedItem, setSelectedItem] = useState(items[0]);

  const handleClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <>
      <h2>Whats your travel snack?</h2>
      <ul>
        {items.map((item) => (
          <li style={{ fontSize: "16px", fontWeight: "bold" }} key={item.id}>
            {item.title}

            <button
              style={{ marginLeft: "5px" }}
              onClick={() => handleClick(item)}
            >
              Choose
            </button>
          </li>
        ))}
      </ul>
      <p>
        You picked{" "}
        <span
          style={{ fontSize: "16px", fontWeight: "bold", color: "#FF5733" }}
        >
          {selectedItem.title}
        </span>
        .
      </p>
    </>
  );
}
