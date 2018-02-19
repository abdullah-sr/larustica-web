export default function () {

    if(window.innerWidth <= 995) {
        document.querySelector(".nav-container").classList.add('shrink');
        document.querySelector(".nav-ul").classList.add('collapse');
    }

    let last_known_scroll_position = 0;
    let ticking = false;

    function shrinkHeader(scrollPos) {
        if(window.innerWidth <= 995) return;
        if (scrollPos > 50) {
            document.querySelector(".nav-container").classList.add('shrink');
        } else {
            document.querySelector(".nav-container").classList.remove('shrink');
        }
    }

    window.addEventListener('scroll', function (e) {
        last_known_scroll_position = window.scrollY;
        if (!ticking) {
            window.requestAnimationFrame(function () {
                shrinkHeader(last_known_scroll_position);
                ticking = false;
            });
            ticking = true;
        }
    });

    const optimizedResize = (function () {

        let callbacks = [],
            running = false;

        // fired on resize event
        function resize() {

            if (!running) {
                running = true;

                if (window.requestAnimationFrame) {
                    window.requestAnimationFrame(runCallbacks);
                } else {
                    setTimeout(runCallbacks, 66);
                }
            }

        }

        // run the actual callbacks
        function runCallbacks() {

            callbacks.forEach(function (callback) {
                callback();
            });

            running = false;
        }

        // adds callback to loop
        function addCallback(callback) {

            if (callback) {
                callbacks.push(callback);
            }

        }

        return {
            // public method to add additional callback
            add: function (callback) {
                if (!callbacks.length) {
                    window.addEventListener('resize', resize);
                }
                addCallback(callback);
            }
        }
    }());


    optimizedResize.add(function () {
        if(window.innerWidth <= 995) {
            document.querySelector(".nav-container").classList.add('shrink');
            document.querySelector(".nav-ul").classList.add('collapse');
        } else {
            document.querySelector(".nav-ul").classList.remove('collapse');
        }
    });

    document.getElementById('toggle-nav').addEventListener('click', function(){
        document.querySelector('.nav-ul').classList.toggle('expand')
    });
}
