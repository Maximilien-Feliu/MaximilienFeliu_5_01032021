let cart = new Cart;
let product = new Products;

let cartItems = JSON.parse(localStorage.getItem('product'));
if (cartItems != null) {
    cartItems = Object.values(cartItems);
}

cart.fillCart();
cart.totalPrice();
cart.selectQuantity();
cart.removeItemInCart();
cart.numberInCartOnLoad();

console.log(cartItems);




