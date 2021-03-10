class Cards {

    //create a product Card 
    createCard (selectedId, imgURL, cardTitle, cardDescription, cardPrice, imgAlt, linkHref) {

        //set all variables needed to create the card metas
        var productsContainer = document.getElementById(selectedId);
        var newLink = document.createElement('a');
        var newDivContainer = document.createElement('div');
        var newDescriptionContainer = document.createElement('div');
        var newImg = document.createElement('img');
        var newTitle = document.createElement('h3');
        var newDescription = document.createElement('p');
        var newPrice = document.createElement('p');
        
        //create the card
        productsContainer.appendChild(newLink).href = linkHref;
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

        if (productId != '') {
            this.cardById();
        }
        
    }

    //fulfill the product card with the elements needed for
    async fillCard (selectedId, method, url, boolean, imgAlt, linkHref) { 
        let httpRequest = await getHttpRequest(method, url, boolean);
      
        if (productId == '') {

            //Here enter what you whant to loop in htppRequest
            for (let i = 0; i < httpRequest.length; i++) {
                this.createCard(selectedId, httpRequest[i].imageUrl, httpRequest[i].name, httpRequest[i].description, httpRequest[i].price, imgAlt, linkHref + httpRequest[i]._id);

            }    
            
        }else {

            this.createCard(selectedId, httpRequest.imageUrl, httpRequest.name, httpRequest.description, httpRequest.price, imgAlt, linkHref + httpRequest._id)
        
        } 

    }

    //card get darken when the user's mouse is over it
    animCardHover (containerId, animationAction, classNameSelected) {
        const cardHover = document.getElementById(containerId);
        let newDivHover = document.createElement('div');          
    
        cardHover.addEventListener(animationAction, (e) => {
            //we do an event delegation (because of dynamic elements)
                if (e.target && e.target.matches(classNameSelected)) {
                    e.path[0].appendChild(newDivHover).className = 'product_hover';
                    newDivHover.innerHTML = 'voir la fiche produit';
                    e.target.style.cursor = 'pointer';
                }
        });

    }

    cardById () {
         
        let newLink = document.getElementsByClassName('product_link')[0];
        let newDivContainer = document.getElementsByClassName('product_card')[0]; 
        let newDivDescriptionContainer = document.getElementsByClassName('product_description_container')[0];
        let newDiv = document.createElement('div');
        let newBtn = document.createElement('button');
        let newLabel = document.createElement('label');
        let newSelect = document.createElement('select');
        let newOption = document.createElement('option'); 
            
        newLink.replaceWith(newDivContainer);
        newDivContainer.classList.add('product_card--id');
        newDivDescriptionContainer.appendChild(newDiv).className = 'select_btn';
        newDiv.appendChild(newSelect).id = 'lenses_select';
        newSelect.name = 'lenses';
        newSelect.appendChild(newOption).innerHTML = '--choisissez votre lentille--';  
        newDiv.appendChild(newBtn).className = 'btn';
        newBtn.innerHTML = 'Ajouter au panier'; 

    }

}



