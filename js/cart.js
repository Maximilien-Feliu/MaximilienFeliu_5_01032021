class Cart {

    //add a Number on the shopping cart icon on every click
    addToCart (response) {
       
        let btnForCart = document.getElementsByClassName('btn_add-cart');
        
        for (let i = 0; i < btnForCart.length; i++) {
            btnForCart[i].addEventListener('click', () => {
                this.numberInCart();
                this.numberAppear();
                product.productsInCart(response);
            })
        }
    }

    //Transform the value to a number then set in localStorage
    numberInCart() {
        
        let productCount = localStorage.getItem('productInCart');
        let cartIcon = document.getElementsByClassName('header_nav_cart_number')[0];

        productCount = parseInt(productCount);
 
        if (productCount) {
            localStorage.setItem('productInCart', productCount + 1);
            cartIcon.textContent = productCount + 1;     

        }else {
            localStorage.setItem('productInCart', 1);
            cartIcon.textContent = 1;
        }
       
    }

    // Make the cartIcon number appear
    numberAppear () {
        document.getElementsByClassName('header_nav_cart_number')[0].style.display = 'flex';
    }

    //Number stay even after refresh
    numberInCartOnLoad () {
        let productCount = localStorage.getItem('productInCart');

        if (productCount) {
            document.getElementsByClassName('header_nav_cart_number')[0].textContent = productCount;
            this.numberAppear();
        }
    }

    // fulfill the cart by items from localStorage
    fillCart () {
        
        if (cartItems) {
            for (let i = 0; i < cartItems.length; i++) {
                this.itemPlaceInCart (cartItems[i].img, cartItems[i].title, cartItems[i].lense, cartItems[i].price, cartItems[i].totalPrice);
                this.addItemsNumber ();
            }
        }else {
            this.emptyBasket();
        }
    }

    // add number of items in cart
    addItemsNumber () {
        let itemsNumber = document.getElementById('items_number');
        itemsNumber.innerHTML = cartItems.length;
    }

    // create HTML elements to fill up
    itemPlaceInCart (imgUrl, itemName, itemLense, priceOne, priceTotal) {

        let itemContainer = document.getElementById('items_in_cart');
        let newDivDetails = document.createElement('div');
        let newDivTitleDetails = document.createElement('div');
        let newDivDynamicDetails = document.createElement('div');
        let newDivQtityContainer = document.createElement('div');
        let itemRmv = document.createElement('button');
        let itemPrice = document.createElement('div');
        let itemPriceTotal = document.createElement('div');
        let itemImg = document.createElement('img');
        let itemTitle = document.createElement('h2');
        let newSpanLense = document.createElement('span');
        let qtityLabel = document.createElement('label');
        let qtitySelect = document.createElement('select');
        let lineBreak = document.createElement('br');

        itemContainer.appendChild(newDivDetails).className = 'item_container';
        newDivDetails.appendChild(newDivTitleDetails).className = 'item_img_description';
        newDivDetails.appendChild(newDivDynamicDetails).className = 'item_dynamic_details';
        newDivDynamicDetails.appendChild(newDivQtityContainer).className = 'item_select_quantity_container';
        newDivDynamicDetails.appendChild(itemRmv).className = 'item_remove';
        newDivDynamicDetails.appendChild(itemPrice).className = 'item_price bold';
        newDivDynamicDetails.appendChild(itemPriceTotal).className = 'item_price--total bold';

        newDivTitleDetails.appendChild(itemImg).src = imgUrl;
        newDivTitleDetails.appendChild(itemTitle).className = 'item_title'; 
        itemTitle.innerHTML = itemName;
        itemTitle.appendChild(lineBreak);
        itemTitle.appendChild(newSpanLense).className = 'item_lense';
        newSpanLense.innerHTML = 'Lentille : ' + itemLense;
        newDivQtityContainer.appendChild(qtityLabel).setAttribute('for', 'item_select_quantity'); 
        qtityLabel.innerHTML = 'Quantité : ';
        newDivQtityContainer.appendChild(qtitySelect).className = 'item_select_quantity';
        qtitySelect.name = 'item_select_quantity';
        itemRmv.className = 'btn_delete';
        itemRmv.innerHTML = 'Supprimer';
        itemPrice.innerHTML = priceOne + ' &euro;'; 
        itemPriceTotal.innerHTML = priceTotal + ' &euro;';

    }

    //Indicate the empty basket and create a redirection to index.html 
    emptyBasket () {
        let emptyBasket = document.getElementById('items_in_cart');
        let noRecap = document.getElementById('shopping_cart_order');
        let redirection = document.createElement('a');

        emptyBasket.innerHTML = 'Votre panier est vide, vous pouvez voir notre liste de produits ';
        emptyBasket.style.fontSize = '20px';
        emptyBasket.style.marginTop = '2em';
        emptyBasket.appendChild(redirection).innerHTML = 'ici';
        redirection.href = '../index.html';
        redirection.style.color = 'rgba(189, 101, 29, 0.822)';
        noRecap.style.display = 'none';
    }
}