const email = document.getElementById('email');
const password = document.getElementById('pswd');
const emailRegex = /^[a-zA-Z0-9.!#$%&'"+/=?^_'{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&]{8,}$/;

document.querySelector('.login-form').addEventListener('keypress', (event) => {
    event.preventDefault();
    check();
})

function check(){
    if (email.value.trim() =="") {
        onError(email, "Email is required");
    } else if (emailRegex.test(email.value)){
        onError(email, "Enter a valid email");
    }else {
        onSuccess(email);
    }
    if (password.value.trim() =="") {
        onError(password, "Password is required");        
    }else if (passwordRegex.test(password.value)){
        onError(password, "Enter a valid password");
    }else {
        onSuccess(password);
    }
};

function onSuccess (input){
    let parent = input.parentElement;
    let err = parent.querySelector("small");
    err.style.display = "none";
    err.innerText = "";
    parent.classList.add("success");
    parent.classList.remove("error");
}
function onError (input, message){
    let parent = input.parentElement;
    let err = parent.querySelector("small");
    err.style.display = "block";
    err.innerText = message;
    parent.classList.add("error");
    parent.classList.remove("success");
}