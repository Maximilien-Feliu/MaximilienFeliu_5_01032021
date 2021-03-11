class Cart {

    //add a Number on the shopping cart icon on every click
    async addToCart (method, url, boolean) {
        let httpRequest = await getHttpRequest(method, url, boolean);
        let btnForCart = document.getElementsByClassName('btn_add-cart');
        
        for (let i = 0; i < btnForCart.length; i++) {
            btnForCart[i].addEventListener('click', () => {
                this.numberInCart();
                this.numberAppear();
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

    //Make the number appear for the css animation
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

}