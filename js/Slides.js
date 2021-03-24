class Slides {

    constructor () {
        this.defileImg(); 
    }

    defileImg () {
        let divSlides = document.getElementsByClassName('head_slides')[0];
        let counter = 1;
        divSlides.style.background = 'url(../img/slides/img_slide0.webp) no-repeat fixed center';
        divSlides.style.backgroundSize = 'cover';

        let titleAppear = document.getElementsByClassName('title_appear0')[0];
        titleAppear.style.display = 'block';

        setInterval(change, 5000); 

        function change() {     

                divSlides.style.background = 'url(../img/slides/img_slide'+ counter + '.webp) no-repeat fixed center';
                divSlides.style.backgroundSize = 'cover';

                let titleAppear = document.getElementsByClassName('title_appear'+ counter)[0];
                titleAppear.style.display = 'block';  

                if(counter > 0) { 
                    let titleRemove = document.getElementsByClassName('title_appear'+ (counter - 1))[0];
                    titleRemove.style.display = 'none';  
                }else {
                    let titleRemove = document.getElementsByClassName('title_appear3')[0];
                    titleRemove.style.display = 'none';
                }

                counter++; 

                if(counter == 4) {
                    divSlides.style.background = 'url(../img/slides/img_slide3.webp) no-repeat fixed bottom';
                    divSlides.style.backgroundSize = 'cover';
                }
                if (counter > 3) { 
                    counter = 0;
                }            
        }     
    }
}
