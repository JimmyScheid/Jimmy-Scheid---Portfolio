// select element
const selectElement = function(element){
    return document.querySelector(element);
};

let navToggler = selectElement('.nav_toggle');
let body = selectElement('body');

navToggler.addEventListener('click', function (){
    body.classList.toggle('open');
});