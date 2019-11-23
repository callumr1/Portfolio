// Checks to see if the user is using IE11
const isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
if (!isIE11) {
    let heroContent = document.getElementById("heroContent");
    // removed the height property to prevent other content overlapping the herocontent on mobile devices
    heroContent.style.height = "auto";
}

function loadImage(id, targetId) {
    let element = document.getElementById(id);
    let targetElement = targetId ? document.getElementById(targetId) : element;
    let imageToLoad;

    if (element.dataset.image) {
        imageToLoad = element.dataset.image;
    } else if (typeof element.currentSrc === "undefined") {
        imageToLoad = element.src;
    } else {
        imageToLoad = element.currentSrc;
    }

    if (imageToLoad) {
        let img = new Image();
        img.src = imageToLoad;
        img.onload = function () {
            targetElement.classList.add("is-loaded");
        }
    }
}

document.addEventListener('DOMContentLoaded', function () {
    loadImage('wallpaper');
    loadImage('pictureImage', 'picture');
    //loadImage('notes-logo-image','notes-image');
});