class User {

    constructor() {
        this.returnBack();
    }
    
    /***************************
     ****** validate and get the values from the form, then create a contact object, 
                get products object from localStorage and create an order object, 
                    send it to the back-end server and set orderId to the localStorage*****
                                                                        ***************************/

    sendOrder () {
        let order = document.getElementsByClassName('btn_order')[0];
        
        let regexpOccidentalNoun = /^[a-zA-ZéèîïÉÈÎÏàçùüöôœÀÇÙÜÖÔ]+([\s-'][a-zA-ZéèîïÉÈÎÏàçùüöôœÀÇÙÜÖÔ]+){0,2}?$/; 
        let regexpOccidentalCity = /^[a-zA-ZéèîïÉÈÎÏàçùüöôœÀÇÙÜÖÔ]+([\s-'][a-zA-ZéèîïÉÈÎÏàçùüöôœÀÇÙÜÖÔ]+){0,20}?$/;
        let regexpEmail = /^[\w-.éèîïàçùüöôœ]+[@]{1}[\w-éèîïàçùüöôœ]+[.]{1}[a-z]{2,3}$/;

        order.addEventListener('click', (e) => { // get the values from the form (id='order-form')
            let inputRequired = document.getElementsByTagName('input'); 
            let firstName = document.getElementById('user_firstName');
            let lastName = document.getElementById('user_lastName');
            let address = document.getElementById('user_address');
            let city = document.getElementById('user_city');
            let email = document.getElementById('user_email');

            let inputError = document.getElementById('input_error');
            let firstNameError = document.getElementById('error_firstName');
            let lastNameError = document.getElementById('error_lastName');
            let cityError = document.getElementById('error_city');
            let emailError = document.getElementById('error_email');

            inputRequired = Array.from(inputRequired);
            e.preventDefault();

            firstNameError.style.display = 'none';
            lastNameError.style.display = 'none';
            cityError.style.display = 'none';
            emailError.style.display = 'none';

            for (let i = 0; i < inputRequired.length; i++) {
                inputRequired[i].style.borderColor = 'inherit';
            }

            // conditions to validate the form and create the contact object
            switch (false) {
                case regexpOccidentalNoun.test(firstName.value):
                    firstName.style.borderColor = 'rgb(211, 0, 0)';
                    firstNameError.style.display = 'block';
                    firstNameError.innerHTML = 'Prénom invalide.';
                    break;
    
                case regexpOccidentalNoun.test(lastName.value):
                    lastName.style.borderColor = 'rgb(211, 0, 0)';
                    lastNameError.style.display = 'block';
                    lastNameError.innerHTML = 'Nom invalide.';
                    break;
    
                case regexpOccidentalCity.test(city.value):
                    city.style.borderColor = 'rgb(211, 0, 0)';
                    cityError.style.display = 'block';
                    cityError.innerHTML = 'Nom de ville invalide.';
                    break;
    
                case regexpEmail.test(email.value):
                    email.style.borderColor = 'rgb(211, 0, 0)';
                    emailError.style.display = 'block';
                    emailError.innerHTML = 'Email invalide.';
                    break;
    
                default:
                    if(address.value != ""){
                        let contact = { // create a contact object
                            firstName: firstName.value,
                            lastName: lastName.value,
                            address: address.value,
                            city: city.value,
                            email: email.value
                        };
                        contact = { 
                            contact: contact
                        };               
                        this.objectByOrder(contact);
                        errorMessage.style.display = 'none';
                    }
            }    
        
            // indacate when an input is empty
            for (let i = 0; i < inputRequired.length; i++) {
                if (inputRequired[i].value === "") {
                    inputRequired[i].style.borderColor = 'rgb(211, 0, 0)';   
                    inputError.innerHTML = 'Veuillez renseigner tous les champs obligatoires.'
                }
            };     
        });   
    }

    // get the objects and transform its to an array then send it
    objectByOrder (userInfo) {       
        let cartItemsId = cartItems;
        
        for ( let i = 0; i < cartItemsId.length; i++) {
            cartItemsId[i] = cartItems[i].id;
        };
        let products = cartItemsId; // array of products id

        let order = { // create an object with the contact object and the array of products id
            ...userInfo,
            products,
        };
        order = JSON.stringify(order);

        let httpRequest = postHttpRequest('post', 'http://localhost:3000/api/cameras/order', order); // post the object to the back-end server
        let totalAmount = document.getElementsByClassName('item_price--total--all')[0].textContent;

        httpRequest.then((response) => {
            localStorage.clear();
            localStorage.setItem('ordered', JSON.stringify([response.orderId, totalAmount])); // set the response on localStorage for 'validOrder.html'
            window.location.href = '../html/validOrder.html';
        });
    }

    // hide the form
    returnBack () {
        let returnBack = document.getElementById('btn_return_back');
        let userFormBackground = document.getElementById('background_shadow');

        returnBack.addEventListener('click', () => {
            userFormBackground.style.visibility = 'hidden'; 
            userFormBackground.style.opacity = '0%';
        });
    }
}

