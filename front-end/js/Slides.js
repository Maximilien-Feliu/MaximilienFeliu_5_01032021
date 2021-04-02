class Slides {

    constructor () {
        this.defileImg(); 
    }

    // backgrounds url and paragraphes defile every 5seconds 
    defileImg () {
        let divSlides = document.getElementsByClassName('head_slides')[0];
        let counter = 0;

        divSlides.style.background = 'url(/front-end/img/slides/img_slide0.webp) no-repeat fixed center';
        divSlides.style.backgroundSize = 'cover';
        let titleAppear = document.getElementsByClassName('title_appear0')[0];
        titleAppear.style.display = 'block'; 
        let interval = setInterval(change, 5000); 

        // increase the counter for the background url
        function change() {                    
                if (counter == 3) { 
                    counter = 0;
                }else {
                    counter++;   
                } 
                divSlides.style.background = 'url(/front-end/img/slides/img_slide'+ counter + '.webp) no-repeat fixed center';
                divSlides.style.backgroundSize = 'cover';

                titleAppear = document.getElementsByClassName('title_appear'+ counter)[0];
                titleAppear.style.display = 'block';  

                if(counter > 0) { 
                    let titleRemove = document.getElementsByClassName('title_appear'+ (counter - 1))[0];
                    titleRemove.style.display = 'none';  
                }else {
                    let titleRemove = document.getElementsByClassName('title_appear3')[0];
                    titleRemove.style.display = 'none';
                }            
        } 
        this.defileImgOnClick(counter, interval, change);    
    }

    // backgrounds defile for one url on click
    defileImgOnClick (count, interval, func) {
        
        let divSlides = document.getElementsByClassName('head_slides')[0];
        let arrowLeft = document.getElementsByClassName('fa-arrow-left')[0];
        let arrowRight = document.getElementsByClassName('fa-arrow-right')[0];

        // shows previous slide
        arrowLeft.addEventListener('click', () => {
            if (count == 0){
                let titleRemove = document.getElementsByClassName('title_appear0')[0];
                titleRemove.style.display = 'none'; 
                count = 3;
            }else {
                count--;
                let titleRemove = document.getElementsByClassName('title_appear' + (count + 1))[0];
                titleRemove.style.display = 'none'; 
                
            }    
            clearInterval(interval); 
            divSlides.style.background = 'url(/front-end/img/slides/img_slide'+ count +'.webp) no-repeat fixed bottom';
            divSlides.style.backgroundSize = 'cover';
            let titleAppear = document.getElementsByClassName('title_appear' + count)[0];
            titleAppear.style.display = 'block';
            interval = setInterval(func, 5000);              
        });

        // shows next slide
        arrowRight.addEventListener('click', () => {
            if (count == 3) {
                let titleRemove = document.getElementsByClassName('title_appear3')[0];
                titleRemove.style.display = 'none';
                count = 0;
            }else {
                count++;
                let titleRemove = document.getElementsByClassName('title_appear'+ (count - 1))[0];
                titleRemove.style.display = 'none';
            }
            clearInterval(interval); 
            divSlides.style.background = 'url(/front-end/img/slides/img_slide'+ (count) +'.webp) no-repeat fixed bottom'
            divSlides.style.backgroundSize = 'cover';
            let titleAppear = document.getElementsByClassName('title_appear' + count)[0];
            titleAppear.style.display = 'block';
            interval = setInterval(func, 5000);    
        });
    }
}
