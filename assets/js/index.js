const signUp = document.getElementById("sign-up");
const signUpContainer = document.getElementById("sign-up-container");
const signIn = document.getElementById("sign-in");
const signInContainer = document.getElementById("sign-in-container");
const admin = document.getElementById("admin");
const user = document.getElementById("user");
const signInForm = document.getElementById("sign-in-form");
const signUpForm = document.getElementById("sign-up-form");
const adminForm = document.getElementById("admin-form");

adminForm.style.display = "none";
signUpForm.style.display = "none"

signUp.addEventListener('click', () => {
    signUpContainer.classList.add("current");
    signInContainer.classList.remove("current");

    signInForm.style.display = "none";
    adminForm.style.display = "none";
    signUpForm.style.display = "block";
});

signIn.addEventListener('click', () => {
    signInContainer.classList.add("current");
    signUpContainer.classList.remove("current");
    user.style.color = "#33691E";
    admin.style.color = "#EEEEEE";

    signInForm.style.display = "block";
    adminForm.style.display = "none";
    signUpForm.style.display = "none";
});

admin.addEventListener('click', () => {
    admin.style.color = "#33691E";
    user.style.color = "#EEEEEE";

    signInForm.style.display = "none";
    signUpForm.style.display = "none";
    adminForm.style.display = "block";
});

user.addEventListener('click', () => {
    user.style.color = "#33691E";
    admin.style.color = "#EEEEEE";

    signInForm.style.display = "block";
    adminForm.style.display = "none";
    signUpForm.style.display = "none";
});