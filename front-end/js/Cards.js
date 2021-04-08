class Cards {

    //create a product Card 
    createCard (selectedId, imgURL, cardTitle, cardDescription, cardPrice, imgAlt, linkHref) {

        //set all variables needed to create the card metas
        var productsContainer = document.getElementById(selectedId);
        var newLink = document.createElement('a');
        let newDivHover = document.createElement('div');  
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
        newImg.width = '70';
        newImg.height = '50';
        newDivContainer.appendChild(newDivHover).className = 'product_hover';
        newDivHover.innerHTML = 'voir la fiche produit';
        newDivContainer.appendChild(newDescriptionContainer).className = 'product_description_container';
        newDescriptionContainer.appendChild(newTitle);
        newTitle.innerHTML = cardTitle;
        newDescriptionContainer.appendChild(newDescription).className = 'product_description';
        newDescription.innerHTML = cardDescription;
        newDescriptionContainer.appendChild(newPrice).className = 'product_price bold';
        newPrice.innerHTML = cardPrice / 100 + ' &euro;';        
    }

    //fulfill the product card with the elements needed for
    fillCard (selectedId, response, imgAlt, linkHref) { 

        if (Array.isArray(response)) {

            //Here enter what you whant to loop in htppRequest
            for (let i = 0; i < response.length; i++) {
                this.createCard(selectedId, response[i].imageUrl, response[i].name, response[i].description, response[i].price, imgAlt + response[i].name, linkHref + response[i]._id);
            }    
            
        }else {
            this.createCard(selectedId, response.imageUrl, response.name, response.description, response.price, imgAlt + response.name, linkHref + response._id);
            this.cardById();
            this.addLensesToCard(response);
        } 
    }

    //Add lenses to the select options
    addLensesToCard (response) {
        
        for (let i = 0; i < response.lenses.length; i++) {             
            let selectOptions = document.getElementById('lenses_select');
            let newOption = document.createElement('option');
            newOption.className = 'lenses_option';

            selectOptions.appendChild(newOption)[i];
            newOption.innerHTML = response.lenses[i];
            newOption.value = 'lense' + i;
        }   
    }

    cardById () {
         
        //catch classes to modify and create elements
        let newLink = document.getElementsByClassName('product_link')[0];
        let newDivContainer = document.getElementsByClassName('product_card')[0]; 
        let newDivHover = document.getElementsByClassName('product_hover')[0];
        let newDivDescriptionContainer = document.getElementsByClassName('product_description_container')[0];
        let newDiv = document.createElement('div');
        let newBtn = document.createElement('button'); 
        let newLabel = document.createElement('label');
        let newSelect = document.createElement('select');
        let newOption = document.createElement('option'); 
             
        //create the product card
        newLink.replaceWith(newDivContainer);
        newDivContainer.removeChild(newDivHover);
        newDivContainer.classList.add('product_card--id');
        newDivDescriptionContainer.appendChild(newLabel).setAttribute('for', 'lenses_select');
        newLabel.className = 'lenses_label';
        newLabel.innerHTML = 'Choisissez votre lentille : '
        newDivDescriptionContainer.appendChild(newDiv).className = 'select_btn';
        newDiv.appendChild(newSelect).id = 'lenses_select';
        newSelect.name = 'lenses';
        newSelect.appendChild(newOption).innerHTML = '--choisissez votre lentille--';  
        newDiv.appendChild(newBtn).className = 'btn btn_add-cart';
        newBtn.innerHTML = 'Ajouter au panier'; 
    }
}



