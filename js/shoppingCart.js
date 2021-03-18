let cart = new Cart;
let product = new Products;

let cartItems = JSON.parse(localStorage.getItem('product'));
if (cartItems != null) {
    cartItems = Object.values(cartItems);
}

console.log(cartItems);

cart.fillCart();
cart.numberInCartOnLoad();
cart.totalPrice();

