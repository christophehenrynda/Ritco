const firstName = document.getElementById('fname');
const secondName = document.getElementById('lname');
const telephone = document.getElementById('telephone');
const from = document.getElementById('from');
const to = document.getElementById('to');
const laguageType = document.getElementById('laguage');
const laguageMass = document.getElementById('kgs');
const telRegex = /^(\+?250|0)?7[0-9]{8}$/;

document.querySelector('.form-input').addEventListener('keypress', (event) => {
    event.preventDefault();
    checkClient();
})

function checkClient(){
    if (telephone.value.trim() =="") {
        onError(telephone, "Email is required");
    } else if (telRegex.test(email.value)){
        onError(telephone, "Enter a valid email");
    }else {
        onSuccess(telephone);
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