let card = new Cards; 
let cart = new Cart;

card.fillCard('products_container', 'GET', 'http://localhost:3000/api/cameras/' + productId, true, 'image d\'une caméra vintage', '../html/product.html?id=');
card.animCardHover('products_container', 'mouseover', 'div.product_card');
cart.addToCart('GET', 'http://localhost:3000/api/cameras/' + productId, true);
cart.numberInCartOnLoad();

