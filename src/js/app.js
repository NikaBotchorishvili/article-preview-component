let container = document.getElementById('container');
let shareButtonDesktop = document.getElementById('shareButtonDesktop');
let shareButtonMobile = document.getElementById('shareButtonMobileOpen');
let information = document.getElementById('information');
let shareBoxDesktop = document.getElementById('shareBoxDesktop');
let shareBoxMobile = document.getElementById('shareBoxMobile');

shareButtonDesktop.addEventListener("click", toggleShareBoxDesktop)

shareButtonMobile.addEventListener("click", openShareBoxMobile)

function toggleShareBoxDesktop() {
    shareBoxDesktop.style.display = (shareBoxDesktop.style.display === 'none' || shareBoxDesktop.style.display === '') ? 'flex' : 'none';
}
function openShareBoxMobile() {
    information.style.display = 'none';
    container.style.paddingInline = 0;
    container.style.paddingBottom = 0;
    shareButtonMobile.style.display = "none";
    shareBoxMobile.style.display = "flex"
}
function closeShareBoxMobile() {
    

}

