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

// Add smooth scrolling to the hero scroll
$("#hero-scroll").on('click', function (event) {

    if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function () {

            window.location.hash = hash;
        });
    }
});

// Lazy loading images
document.addEventListener("DOMContentLoaded", function () {
    var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

    if ("IntersectionObserver" in window) {
        let lazyImageObserver = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    let lazyImage = entry.target;
                    lazyImage.src = lazyImage.dataset.src;
                    lazyImage.srcset = lazyImage.dataset.srcset;
                    lazyImage.classList.remove("lazy");
                    lazyImageObserver.unobserve(lazyImage);
                }
            });
        });

        lazyImages.forEach(function (lazyImage) {
            lazyImageObserver.observe(lazyImage);
        });
    } else {
        // Possibly fall back to a more compatible method here
    }
});