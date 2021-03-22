let cartItems = JSON.parse(localStorage.getItem('product'));
if (cartItems != null) {
    cartItems = Object.values(cartItems);
}

let cart = new Cart(cartItems);
let product = new Products;
let user = new User;

cart.fillCart();
cart.totalPrice();
cart.selectQuantity();
cart.removeItemInCart();
cart.formAppear();

user.sendOrder();





