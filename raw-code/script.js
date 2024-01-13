// // catch DOM elements
// const button = document.getElementById('button');
// const price = document.getElementById('price');
// const total = document.getElementById('total');

// // state or data
// const productsPrice = 5000;

// let totalPrice = 0;

// // set product price intially
// price.innerText = `৳ ${productsPrice}`
// total.innerText = 'Total: ৳ 0';

// button.addEventListener('click', () => {
//     totalPrice += productsPrice;

//     // update UI
//     total.innerText = `Total: ৳ ${totalPrice}`;
// });

// const a = 0;
// const b = 5;

// console.log(a % b)

const quotes = ["Quote 1", "Quote 2", "Quote 3", "Quote 4", "Quote 5"];

const index = 0;

if (index === 0 ) {
    console.log(quotes[index])
}
for (let i = index + 1; i % quotes.length; i++) {
        console.log(quotes[i]) 
}
