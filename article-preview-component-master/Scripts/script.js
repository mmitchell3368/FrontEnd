// Desktop

document.addEventListener('DOMContentLoaded', () => {
    const shareButton = document.getElementById('share-button');
    const shareImage = document.getElementById('share-img');
    const displayElement = document.querySelector('.display');
    const triangleElement = document.querySelector('.triangle-down');

    shareButton.addEventListener('click', () => {
        if (displayElement.style.display === "none" && triangleElement.style.display === "none") {
            displayElement.style.display = "flex";
            triangleElement.style.display = "flex";
            shareButton.style.backgroundColor = "hsl(217, 19%, 35%)";
            shareImage.style.filter = "brightness(0) invert(1)";
        }
        else {
            displayElement.style.display = "none";
            triangleElement.style.display = "none";
            shareButton.style.backgroundColor = "lightgray";
            shareImage.style.filter = "none";
        }
    });
});

// Mobile
document.addEventListener('DOMContentLoaded', () => {
    const shareButtonInvert = document.getElementById('share-button-invert');
    const shareImageInvert = document.getElementById('share-img-invert');
    const displayElement = document.querySelector('.display');
    let isDisplayVisible = false;

    shareButtonInvert.addEventListener('click', () => {
        isDisplayVisible = !isDisplayVisible;
        displayElement.style.display = isDisplayVisible ? "flex" : "none";
        if (isDisplayVisible) {
            shareButtonInvert.style.backgroundColor = "hsl(214, 17%, 51%)";
            shareImageInvert.style.filter = "brightness(0) invert(1)";
        } else {
            shareButtonInvert.style.backgroundColor = "lightgray";
            shareImageInvert.style.filter = "none";
        }
    });
});



