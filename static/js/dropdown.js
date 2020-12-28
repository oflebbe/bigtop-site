// Modelled after https://github.com/citizenlabsgr/website/ under MIT License Version 7b21034790
// Script to hide/show menu
window.addEventListener("load", function() {
    var droplink = document.querySelector('#droplabel');
    var menu = document.querySelector('ul.sub-menu');
    droplink.addEventListener('click', function (event) {
            if (menu.classList.contains('dn')) {
                menu.classList.remove('dn');
                droplink.setAttribute("aria-expanded", "true");
            } else {
                menu.classList.add('dn');
                droplink.setAttribute("aria-expanded", "false");
            }
        }
    );
})
