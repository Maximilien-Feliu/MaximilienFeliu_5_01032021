class Slides {

    constructor () {
        this.defileImg(); 
    }

    defileImg () {

        let divCarousel = document.getElementsByClassName('head_slides')[0];
        let counter = 1;
        divCarousel.style.background = 'url(../img/slides/img_slide0.webp) no-repeat fixed center';
        divCarousel.style.backgroundSize = 'cover';
        setInterval(change, 5000); 

        function change() {        
                divCarousel.style.background = 'url(../img/slides/img_slide'+ counter + '.webp) no-repeat fixed center';
                divCarousel.style.backgroundSize = 'cover';
                counter++; 

                if(counter == 4) {
                    divCarousel.style.background = 'url(../img/slides/img_slide3.webp) no-repeat fixed bottom';
                    divCarousel.style.backgroundSize = 'cover';
                }

                if (counter > 3) { 
                    counter = 0;
                }            
        }     
    }
}
