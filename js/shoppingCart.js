let cart = new Cart;
let product = new Products;

let httpRequest = getHttpRequest('GET', 'http://localhost:3000/api/cameras/', true);

httpRequest.then((response) => {
    cart.addToCart(response);
    cart.getItemsFromLocalStorage();
    cart.numberInCartOnLoad();
});
