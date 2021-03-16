class Products {

    productsInCart (response) {

        let lensesSelect = document.getElementById('lenses_select');
        let selectOption = lensesSelect.options[lensesSelect.selectedIndex].textContent;

        // create an object 'product' for the local storage    
        let product = {
            img: response.imageUrl,
            title: response.name,
            price: response.price / 100,
            lense: selectOption,
            quantity: 0,
            totalPrice: this.quantity * response.price / 100 
        }
        
        // Search in the local storage if the 'product' key is already there 
        let productItem = localStorage.getItem('product');
        productItem = JSON.parse(productItem);
        console.log(productItem);
        
        // add a value in the value if productItem is different of null and the title is undefined
        if(productItem != null) {
            if (productItem[product.title] == undefined) {
                productItem = {
                    ...productItem,
                    [product.title]: product
                }
            }

            productItem[product.title].quantity += 1;
        }
         else {
             
            product.quantity = 1;
            productItem = {
                [product.title]: product
            }
        }
        productItem[product.title].totalPrice = productItem[product.title].quantity * productItem[product.title].price; // set totalPrice

        localStorage.setItem('product', JSON.stringify(productItem)); // set in local Storage after modifications
    }
}


