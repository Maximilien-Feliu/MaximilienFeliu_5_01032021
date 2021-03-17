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
        
        for (let i = 0; i < cartItemsArray.length; i++) {
            this.itemPlaceInCart (cartItemsArray[i].img, cartItemsArray[i].title, cartItemsArray[i].lense, cartItemsArray[i].price, cartItemsArray[i].totalPrice);
        }
    }

    // create HTML elements to fill up
    itemPlaceInCart (imgUrl, itemName, itemLense, priceOne, priceTotal) {

        let itemContainer = document.getElementById('items_in_cart');
        let newDivDetails = document.createElement('div');
        let newDivTitleDetails = document.createElement('div');
        let newDivQtityContainer = document.createElement('div');
        let itemRmv = document.createElement('button');
        let itemPrice = document.createElement('div');
        let itemPriceTotal = document.createElement('div');
        let itemImg = document.createElement('img');
        let itemTitle = document.createElement('h2');
        let qtityLabel = document.createElement('label');
        let qtitySelect = document.createElement('select');

        itemContainer.appendChild(newDivDetails).className = 'item_container';
        newDivDetails.appendChild(newDivTitleDetails).className = 'item_img_description';
        newDivDetails.appendChild(newDivQtityContainer).className = 'item_select_quantity_container';
        newDivDetails.appendChild(itemRmv).className = 'item_remove';
        newDivDetails.appendChild(itemPrice).className = 'item_price';
        newDivDetails.appendChild(itemPriceTotal).className = 'item_price--total';

        newDivTitleDetails.appendChild(itemImg).src = imgUrl;
        newDivTitleDetails.appendChild(itemTitle).innerHTML = itemName; 
        itemTitle.innerHTML = itemLense;
        newDivQtityContainer.appendChild(qtityLabel).setAttribute('for', 'item_select_quantity'); 
        qtityLabel.innerHTML = 'Quantité : ';
        newDivQtityContainer.appendChild(qtitySelect).className = 'item_select_quantity';
        qtitySelect.name = 'item_select_quantity';
        itemRmv.innerHTML = 'Supprimer';
        itemPrice.innerHTML = priceOne; 
        itemPriceTotal.innerHTML = priceTotal;

    }
}