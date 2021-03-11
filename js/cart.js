class Cart {
    async addToCart (method, url, boolean) {
        let httpRequest = await getHttpRequest(method, url, boolean);
        let btnForCart = document.getElementsByClassName('btn_add-cart');
        
        for (let i = 0; i < btnForCart.length; i++) {
            btnForCart[i].addEventListener('click', () => {
                this.numberInCart();
            })
        }
    }

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
}