let card = new Cards; 
let cart = new Cart;
card.fillCard('product_personalize', 'GET', 'http://localhost:3000/api/cameras/' + productId, true, 'image d\'une caméra vintage', '../html/product.html?id=');
cart.addToCart('GET', 'http://localhost:3000/api/cameras/' + productId, true);
