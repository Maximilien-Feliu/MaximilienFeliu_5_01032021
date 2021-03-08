class Cards {

    //create a product Card in inedx.html
    async createCard (imgURL, cardTitle, cardDescription, cardPrice, imgAlt) {

        //set all variables needing to create the card metas in index.html
        var productsContainer = document.getElementById('products_container');
        var newLink = document.createElement('a');
        var newDivContainer = document.createElement('div');
        var newDescriptionContainer = document.createElement('div');
        var newImg = document.createElement('img');
        var newTitle = document.createElement('h3');
        var newDescription = document.createElement('p');
        var newPrice = document.createElement('p');
        
        //create the product card in index.html
        productsContainer.appendChild(newLink).href = './html/product.html';
        newLink.className = 'product_link';
        newLink.appendChild(newDivContainer).appendChild(newImg).alt = imgAlt;
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
    async fillCard (method, url, boolean, imgAlt) { 
        let httpRequest = await getHttpRequest(method, url, boolean);
        
        for (let i = 0; i < httpRequest.length; i++) {
            this.createCard(httpRequest[i].imageUrl, httpRequest[i].name, httpRequest[i].description, httpRequest[i].price, imgAlt);
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
                }
        });

    }

}

let card = new Cards; 
card.fillCard('GET', 'http://localhost:3000/api/cameras', true, 'image d\'une caméra vintage');
card.animCardHover('products_container', 'mouseover', 'div.product_card');


