class User {
    
    /***************************
     ****** get the values from the form and set on local Storage, 
                then get objects from localStorage, 
                    transform it to an array and send it to the back-end server *****
                                                            ***************************/
    sendOrder () {
        let form = document.getElementById('btn_order');

        form.addEventListener('click', () => { // get the values from the form (id='order-form')
            let firstName = document.getElementById('user_firstName').value;
            let lastName = document.getElementById('user_lastName').value;
            let address = document.getElementById('user_address').value;
            let city = document.getElementById('user_city').value;
            let email = document.getElementById('user_email').value;

            let contact = { // create a contact object
                firstName: firstName,
                lastName: lastName,
                address: address,
                city: city,
                email: email
            }
            contact = { 
                contact: contact
            }
            
            this.objectByOrder(contact);
        });   
    }

    // get the objects and transform its to an array then send it
    objectByOrder (userInfo) {       
        let cartItemsId = cartItems;
        
        for ( let i = 0; i < cartItemsId.length; i++) {
            cartItemsId[i] = cartItems[i].id;
        }
        let products = cartItemsId; // array of products id

        let order = { // create an object with the contact object and the array of products id
            ...userInfo,
            products,
        }
        order = JSON.stringify(order);

        let httpRequest = postHttpRequest('post', 'http://localhost:3000/api/cameras/order', order); // post the object to the back-end server
        let totalAmount = document.getElementsByClassName('item_price--total--all')[0].textContent;

        httpRequest.then((response) => {
            localStorage.clear();
            localStorage.setItem('ordered', JSON.stringify([response.orderId, totalAmount])); // set the response on localStorage for 'validation.html'
        })
    }
}

