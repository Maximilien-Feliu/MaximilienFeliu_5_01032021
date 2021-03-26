class Cart {

    constructor (cartItems) {
        this.numberInCartOnLoad();
        this.cartItems = cartItems;
    }

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
        if (this.cartItems) {
            for (let i = 0; i < this.cartItems.length; i++) {
                this.itemPlaceInCart (this.cartItems[i].img, this.cartItems[i].title, this.cartItems[i].lense, this.cartItems[i].price, this.cartItems[i].totalPrice);
                this.addItemsNumber ();   
                this.addTitles ();
            }         
        }else {
            this.emptyBasket();
        }
    }

    // add number of items in cart
    addItemsNumber () {
        let productCount = localStorage.getItem('productInCart');
        let itemsNumber = document.getElementById('items_number');
        itemsNumber.innerHTML = productCount;
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
        let itemTitle = document.createElement('h3');
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
        itemImg.alt = 'image d\'une caméra vintage';
        newDivTitleDetails.appendChild(itemTitle).className = 'item_title'; 
        itemTitle.innerHTML = itemName;
        itemTitle.appendChild(lineBreak);
        itemTitle.appendChild(newSpanLense).className = 'item_lense';
        newSpanLense.innerHTML = 'Lentille : ' + itemLense;
        newDivQtityContainer.appendChild(qtityLabel).setAttribute('for', 'item_select_quantity'); 
        qtityLabel.innerHTML = 'Quantité : ';
        newDivQtityContainer.appendChild(qtitySelect).className = 'item_select_quantity';
        qtitySelect.name = 'item_select_quantity';
        itemRmv.className = 'btn_text_only';
        itemRmv.innerHTML = 'Supprimer';
        itemPrice.innerHTML = priceOne + ' &euro;'; 
        itemPriceTotal.innerHTML = priceTotal + ' &euro;';
    }

    // add P.U and P.Total
    addTitles () {
        let itemPriceTitle = document.createElement('h3');
        let itemPriceTotalTitle = document.createElement('h3');

        // create a title only for the first card
        let divPriceTitle = document.getElementsByClassName('item_price')[0];
        let divPriceTotalTitle = document.getElementsByClassName('item_price--total')[0];
   
        divPriceTitle.insertAdjacentElement('afterbegin', itemPriceTitle).className = 'item_price_title';
        itemPriceTitle.innerHTML = 'P.U'
        divPriceTotalTitle.insertAdjacentElement('afterbegin', itemPriceTotalTitle).className = 'item_price--total_title';
        itemPriceTotalTitle.innerHTML = 'P.Total';
    } 

    // set the total amount in cart
    totalPrice () {
        let totalPriceItem = document.getElementsByClassName('item_price--total--all')[0];
        let totalPrice = 0;
        if (this.cartItems) {
            for (let i = 0; i < this.cartItems.length; i++) {
                totalPrice = totalPrice + this.cartItems[i].totalPrice;
                totalPriceItem.innerHTML = totalPrice + ' &euro;';
            }
        }
    }

    // modify the quantity of items by selecting the quantity in cart
    selectQuantity () {
        let itemQuantity = document.getElementsByClassName('item_select_quantity');
        let changeNumberInCart = localStorage.getItem('productInCart'); // for changing the number of items in cart
        changeNumberInCart = parseInt(changeNumberInCart);
              
        for (let c = 0; c < itemQuantity.length; c++) {
            let newOptions = document.createElement('option');
            itemQuantity[c].appendChild(newOptions).innerHTML = this.cartItems[c].quantity; // create an option already selected with the quantity origin

            for (let i = 1; i <= 10; i++) {    
                newOptions = document.createElement('option'); // create 10 options by items quantity select
                itemQuantity[c].appendChild(newOptions)[i];
                newOptions.innerHTML = i;

                if (i == this.cartItems[c].quantity) {
                    itemQuantity[c].removeChild(newOptions)[i]; // remove the one equal to the origin option
                }
            } 
            
            itemQuantity[c].addEventListener('click', () => {
                let selectOption = itemQuantity[c].options[itemQuantity[c].selectedIndex].textContent;
                selectOption = parseInt(selectOption); // select the option and transform it to a number
                
                if (selectOption != this.cartItems[c].quantity) {
                    changeNumberInCart = changeNumberInCart - this.cartItems[c].quantity + selectOption; // change the number of items in cart
                    localStorage.setItem('productInCart', changeNumberInCart);

                    this.cartItems[c].quantity = selectOption; // change the item quantity of the item
                    this.cartItems[c].totalPrice = this.cartItems[c].price * selectOption; // change the total price of the item
                    localStorage.setItem('product', JSON.stringify(this.cartItems));
                    location.reload();
                }
            });
        }
    }

    // remove item from cart and localStorage
    removeItemInCart () {
        let btnDelete = document.getElementsByClassName('btn_text_only');
        let decreaseNumberInCart = localStorage.getItem('productInCart'); // for changing the number of items in cart
        decreaseNumberInCart = parseInt(decreaseNumberInCart);

        if (this.cartItems) {

            for (let i = 0; i < btnDelete.length; i++) {
                btnDelete[i].addEventListener('click', () => {
                    console.log(this.cartItems);
                    decreaseNumberInCart = decreaseNumberInCart - this.cartItems[i].quantity; // decrease the number of items in cart
                    localStorage.setItem('productInCart', decreaseNumberInCart);
                    
                    this.cartItems.splice(i, 1); // remove the object from the array by his index
                    localStorage.setItem('product', JSON.stringify(this.cartItems)); 
                    location.reload(); 
                });
            } 
            if (this.cartItems.length == 0 && decreaseNumberInCart == 0) {
                localStorage.removeItem('product');
                localStorage.removeItem('productInCart');
                location.reload();
            }
        }
    }

    // Make the form appear by clicking on the command button
    formAppear () {
        let btnPreOrder = document.getElementsByClassName('btn_preorder')[0];
        let userFormBackground = document.getElementById('background_shadow'); 

        btnPreOrder.addEventListener('click', () => {
            userFormBackground.style.visibility = 'visible';
            userFormBackground.style.opacity = '100%';
        });
    }

    //Indicate the empty basket and create a redirection to index.html 
    emptyBasket () {
        let emptyBasket = document.getElementById('items_in_cart');
        let noRecap = document.getElementById('shopping_cart_order');
        let redirection = document.createElement('a');

        emptyBasket.innerHTML = 'Votre panier est vide, retrouvez notre liste de produits ';
        emptyBasket.style.fontSize = '20px';
        emptyBasket.style.marginTop = '2em';
        emptyBasket.appendChild(redirection).innerHTML = 'ici';
        redirection.href = '../index.html';
        redirection.style.color = 'rgba(189, 101, 29, 0.822)';
        noRecap.style.display = 'none';
    }
}