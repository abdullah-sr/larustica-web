export default function() {
    let last_known_scroll_position = 0;
    let ticking = false;

    function shrinkHeader(scrollPos) {
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
}
