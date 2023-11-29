
const showPopupBtn = document.querySelector(".login-btn");
const formPopup = document.querySelector(".form-popup");
const hidePopupBtn = formPopup.querySelector(".close-btn");
const hidePopupBtn1 = formPopup.querySelector(".close-login1");
const hidePopupBtn2 = formPopup.querySelector(".close-login2");
const signupLoginLink = formPopup.querySelectorAll(".bottom-link a");
var button = document.getElementById("login-btn");
var button1 = document.getElementById("close-btn");
var button2 = document.getElementById("close-login1");
var button3 = document.getElementById("close-login2");

// Show login popup
showPopupBtn.addEventListener("click", () => {
    document.body.classList.toggle("show-popup");
});

// Hide login popup
hidePopupBtn.addEventListener("click", () => {
    showPopupBtn.click();
    
});
// Hide login popup
hidePopupBtn1.addEventListener("click", () => {
    showPopupBtn.click();
    
});
// Hide login popup
hidePopupBtn2.addEventListener("click", () => {
    showPopupBtn.click();
    
});

button1.addEventListener("click", function() {
    button.innerHTML = "LOGIN";
});

button2.addEventListener("click", function() {
    button.innerHTML = "LOGOUT!";
});

button3.addEventListener("click", function() {
    button.innerHTML = "LOGOUT!";
});

// Show or hide signup form
signupLoginLink.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        formPopup.classList[link.id === 'signup-link' ? 'add' : 'remove']("show-signup");
    });
});