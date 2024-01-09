// catch DOM elements
const button = document.getElementById('button');
const price = document.getElementById('price');
const total = document.getElementById('total');

// state or data
const productsPrice = 5000;

let totalPrice = 0;

// set product price intially
price.innerText = `৳ ${productsPrice}`
total.innerText = 'Total: ৳ 0';

button.addEventListener('click', () => {
    totalPrice += productsPrice;

    // update UI
    total.innerText = `Total: ৳ ${totalPrice}`;
});