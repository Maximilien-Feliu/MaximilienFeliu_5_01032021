class Scroll {
    constructor () {
        this.visibleByScrolling()
    }

    // Elements turn visible on scroll
    visibleByScrolling () {
        let ratio = .1;
        let options = {
            root: null,
            rootMargin: '0px',
            threshold: ratio
        }
        
        // turn the item visible and unobserve the intersection to do it only one time
        let intersection = function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.intersectionRatio > ratio) {
                    entry.target.classList.add('to_reveal-visible');
                    observer.unobserve(entry.target);
                }
            });
        }        
        let observer = new IntersectionObserver(intersection, options);

        // observe the intersection between the window and the item to reveal
        document.querySelectorAll('.to_reveal').forEach(function revealItem(reveal) {
            observer.observe(reveal);
        }); 
    }
}