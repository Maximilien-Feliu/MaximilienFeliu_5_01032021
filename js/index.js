let card = new Cards; 
card.fillCard('products_container', 'GET', 'http://localhost:3000/api/cameras', true, 'image d\'une caméra vintage');
card.animCardHover('products_container', 'mouseover', 'div.product_card');
card.setCardOnClick('products_container', 'div.product_hover');  