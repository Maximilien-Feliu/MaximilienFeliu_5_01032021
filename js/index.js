let card = new Cards; 
card.fillCard('products_container', './html/product.html', 'GET', 'http://localhost:3000/api/cameras', true, 'image d\'une caméra vintage');
card.animCardHover('products_container', 'mouseover', 'div.product_card');
