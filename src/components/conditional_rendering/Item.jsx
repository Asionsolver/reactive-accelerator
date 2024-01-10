/* eslint-disable react/prop-types */


export default function Item({ name, isPacked }) {
    // if (isPacked) {
    //     return <li className="item">{name} ✔</li>;
    //   }
    //   return <li className="item">{name}</li>;

    //Conditional (ternary) operator (? :)
    return <li className="item"> {isPacked ? <del>{name + '✔'}</del>: name}</li>;
}
