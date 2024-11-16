let cart = [];

const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartItemsList = document.getElementById('cart-items');
const totalPriceDisplay = document.getElementById('total-price');
const clearCartButton = document.getElementById('clear-cart');

addToCartButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    const productName = event.target.getAttribute('data-product');
    const productPrice = parseFloat(event.target.getAttribute('data-price'));
    addToCart(productName, productPrice);
  });
});

function addToCart(productName, productPrice) {
  
  cart.push({ name: productName, price: productPrice });
  updateCart();
}

function updateCart() {

  cartItemsList.innerHTML = '';
  let totalPrice = 0;
  
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} -₹ ${item.price.toFixed(2)}`;
    cartItemsList.appendChild(li);
    totalPrice += item.price;
  });

  totalPriceDisplay.textContent = totalPrice.toFixed(2);
}

clearCartButton.addEventListener('click', () => {

  cart = [];
  updateCart();
});
