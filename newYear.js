document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message!');
});

const products = [
    { name: 'Christmas Tree', price: '$50' },
    { name: 'Santa Hat', price: '$10' },
];

const productGrid = document.querySelector('.product-grid');

products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.innerHTML = `<h3>${product.name}</h3><p>${product.price}</p>`;
    productGrid.appendChild(productDiv);
});