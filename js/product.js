const urlParams = new URLSearchParams(window.location.search);
let productId = urlParams.get('id');

let card = new Cards; 
let cart = new Cart;

let httpRequest = getHttpRequest('GET', 'http://localhost:3000/api/cameras/', true, productId);

httpRequest.then((response) => {
    card.fillCard('product_personalize', response, 'image d\'une caméra vintage', '../html/product.html?id=');
    cart.addToCart(response);
    cart.numberInCartOnLoad();
});
