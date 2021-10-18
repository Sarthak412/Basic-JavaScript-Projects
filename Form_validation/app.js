const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();

});

function checkInputs() {
    // Getting the values from the inputs
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const cpasswordValue = cpassword.value.trim();

    if(usernameValue === ''){
        // show error & error message
        setErrorFor(username, 'Username cannot be blank');
    }else{
        // show success class
        setSuccessFor(username);
    }

    if(emailValue === ''){
        // show error
        setErrorFor(email, 'Email cannot be blank');
    }else if(!isEmail(emailValue)){
        // show success class
        setErrorFor(email, 'Invalid email');
    }else{
        setSuccessFor(email);
    }

    if(passwordValue == ''){
        // show error
        setErrorFor(password, 'Password field cannot be empty');
    }else{
        // show success class
        setSuccessFor(password);
    }

    if(cpasswordValue === ''){
        setErrorFor(cpassword, "Password field empty");
    }else if(cpasswordValue !== passwordValue){
        setErrorFor(cpassword, `Passwords doesn't match`);
    }else{
        setSuccessFor(cpassword);
    }

}


function setErrorFor(input, message) {
    const formControl = input.parentElement;  // .form-control
    const small = formControl.querySelector('small');
    
    // add error message inside small
    small.innerText = message;
    
    // add error class
    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;

    formControl.className = 'form-control success';

}

// Validate Email function

function isEmail(email) {
    // regex to validate email
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}