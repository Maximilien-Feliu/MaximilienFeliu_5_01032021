class Products {

    productsInCart (response) {
            
        let product = {
            img: response.imageUrl,
            title: response.name,
            description: response.description,
            price: response.price / 100,
            lense: response.lenses,
            quantity: 0,
            totalPrice: this.quantity * response.price / 100 
        }
        
        let productItem = localStorage.getItem('product');
        productItem = JSON.parse(productItem);
        console.log(productItem);
        
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
        productItem[product.title].totalPrice = productItem[product.title].quantity * productItem[product.title].price;

        localStorage.setItem('product', JSON.stringify(productItem));
    }
}

