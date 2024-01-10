/* eslint-disable react/prop-types */

// const person = {
//     person: {
//         name: 'Lin Lanying',
//         imageId: '1bX5QH6',
//     },
//     size: 100,
// }


// Forwarding props with the JSX spread syntax
export default function Avatar({ person , size }) {
  return (
    <>
      <div>
          <h1>This person name is {person}</h1>
          <h2>This person height is {size}</h2>
      </div>
    </>
  );
}
