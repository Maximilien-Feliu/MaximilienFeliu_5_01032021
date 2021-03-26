class Scroll {
    constructor () {
        this.visibleByScrolling()
    }

    visibleByScrolling () {
        let ratio = .1;
        let options = {
            root: null,
            rootMargin: '0px',
            threshold: ratio
          }
          
        let intersection = function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.intersectionRatio > ratio) {
                    entry.target.classList.add('to_reveal-visible');
                    observer.unobserve(entry.target);
                }
            })
        }
          
        let observer = new IntersectionObserver(intersection, options);
        document.querySelectorAll('.to_reveal').forEach(function revealItem(reveal) {
            observer.observe(reveal);
        }); 
    }
}