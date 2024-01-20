let shareButton = document.getElementById('shareButton');
let shareBox = document.getElementById('shareBox');

shareButton.addEventListener("click", toggleShareBox)
function toggleShareBox() {
    console.log("ben")
    shareBox.style.display = (shareBox.style.display === 'none' || shareBox.style.display === '') ? 'flex' : 'none';
}