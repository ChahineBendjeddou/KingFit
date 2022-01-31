// sticky navbar 

document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            document.getElementById('navbar_top').classList.remove('navbar-static-top');
            document.getElementById('navbar_top').classList.add('navbar-fixed-top');
            // document.getElementById('navbar_top').classList.add('fixed-top');
            // add padding top to show content behind navbar
            // navbar_height = document.querySelector('.navbar').offsetHeight;
            // document.body.style.paddingTop = navbar_height + 'px';
        } else {
            document.getElementById('navbar_top').classList.add('navbar-static-top');
            document.getElementById('navbar_top').classList.remove('navbar-fixed-top');
            // document.getElementById('navbar_top').classList.remove('fixed-top');
            // remove padding top from body
            // document.body.style.paddingTop = '0';
        }
    });
});

// validation forma

const emailcontact = document.getElementById('emailcontact');
const textareacontact = document.getElementById('textareacontact');
const btncontact = document.getElementById('btncontact');
const msgcontact = document.getElementById('msgcontact');

btncontact.addEventListener('click', function (e) {
    if (emailcontact.value.trim() && textareacontact.value.trim()) {
        msgcontact.innerText = 'successfull';
        emailcontact.value = '';
        textareacontact.value = '';
    }
})