const errorIcon = document.getElementById('err');
const errorMsg = document.getElementById('errmsg');
const inputField = document.getElementById('inputfield');
const button = document.getElementById('btn');

// Desktop
function handleClick() {
    if (errorIcon.style.display === "none" && errorMsg.style.display === "none") {
        errorIcon.style.display = "flex";
        errorMsg.style.display = "flex";
        inputField.style.border = "2px solid red";
        button.style.opacity = "0.7";
    }
    else {
        errorIcon.style.display = "none";
        errorMsg.style.display = "none";
        inputField.style.border = "1px solid hsla(0, 6%, 24%, 0.3)";
        button.style.opacity = 1;
    }
}

button.addEventListener('click', handleClick);
