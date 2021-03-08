class Cards {

    //create a product Card 
    async createCard (selectedId, imgURL, cardTitle, cardDescription, cardPrice, imgAlt) {

        //set all variables needed to create the card metas
        var productsContainer = document.getElementById(selectedId);
        var newDivContainer = document.createElement('div');
        var newDescriptionContainer = document.createElement('div');
        var newImg = document.createElement('img');
        var newTitle = document.createElement('h3');
        var newDescription = document.createElement('p');
        var newPrice = document.createElement('p');
        
        productsContainer.appendChild(newDivContainer).appendChild(newImg).alt = imgAlt;

        //fin test 
        newDivContainer.className = 'product_card shadow';
        newImg.src = imgURL;
        newDivContainer.appendChild(newDescriptionContainer).className = 'product_description_container';
        newDescriptionContainer.appendChild(newTitle);
        newTitle.innerHTML = cardTitle;
        newDescriptionContainer.appendChild(newDescription).className = 'product_description';
        newDescription.innerHTML = cardDescription;
        newDescriptionContainer.appendChild(newPrice).className = 'product_price bold';
        newPrice.innerHTML = cardPrice / 100 + ' &euro;';
        
    }

    //fulfill the product card with the elements needed for
    async fillCard (selectedId, method, url, boolean, imgAlt) { 
        let httpRequest = await getHttpRequest(method, url, boolean);
        
        for (let i = 0; i < httpRequest.length; i++) {
            this.createCard(selectedId, httpRequest[i].imageUrl, httpRequest[i].name, httpRequest[i].description, httpRequest[i].price, imgAlt);
        }
    }

    //card get darken when the user's mouse is over it
    animCardHover (containerId, animationAction, classNameSelected) {
        const cardHover = document.getElementById(containerId);
        var newDivHover = document.createElement('div');          
    
        cardHover.addEventListener(animationAction, (e) => {
            //we do an event delegation (because of dynamic elements)
                if (e.target && e.target.matches(classNameSelected)) {
                    e.path[0].appendChild(newDivHover).className = 'product_hover';
                    newDivHover.innerHTML = 'voir la fiche produit';
                    e.target.style.cursor = 'pointer';
                }
        });

    }

    setCardOnClick (containerId, classNameSelected) {
        const localCard = document.getElementById(containerId);

        localCard.addEventListener('click', (e) => {
            if (e.target && e.target.matches(classNameSelected)) {
                //localStorage.setItem(classNameSelected); 
                window.location.href = "../html/product.html";
            }
        })
    }

}



