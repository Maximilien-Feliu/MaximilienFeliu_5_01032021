let card = new Cards; 
let cart = new Cart;
let slides = new Slides;
let scroll = new Scroll;

let httpRequest = getHttpRequest('GET', 'http://localhost:3000/api/cameras/', true);

httpRequest.then((response) => {
    card.fillCard('products_container', response, 'image d\'une caméra vintage', '/front-end/html/product.html?id=');
});

