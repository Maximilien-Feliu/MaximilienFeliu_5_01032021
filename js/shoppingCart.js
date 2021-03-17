let cart = new Cart;
let product = new Products;

let cartItems = JSON.parse(localStorage.getItem('product'));
let cartItemsArray = Object.values(cartItems);
console.log(cartItemsArray);

    cart.fillCart();
    cart.numberInCartOnLoad();

