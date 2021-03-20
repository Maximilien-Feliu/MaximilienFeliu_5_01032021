class User {
    
    /***************************
     ****** get the values from the form and set on local Storage, 
                then recuperate objects from localStorage, 
                    transform it to an array and send it to the back-end server *****
                                                            ***************************/
    getUserInfo () {

        let form = document.getElementById('btn_order');

        form.addEventListener('click', () => {
            let firstName = document.getElementById('user_firstName').value;
            let lastName = document.getElementById('user_lastName').value;
            let address = document.getElementById('user_address').value;
            let city = document.getElementById('user_city').value;
            let email = document.getElementById('user_email').value;

            let contact = {
                firstName: firstName,
                lastName: lastName,
                address: address,
                city: city,
                email: email
            }
    
            contact = { 
                contact: contact
            }
            localStorage.setItem('contact', JSON.stringify(contact));
            console.log(contact);           
        });   
    }
}

