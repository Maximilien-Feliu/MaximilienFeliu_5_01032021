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

    // get the items from the local storage then transform it to an array
    getItemsFromLocalStorage () {
        let cartItems = JSON.parse(localStorage.getItem('product'));
        let cartItemsArray = Object.values(cartItems);
        console.log(cartItemsArray);
    }
}