// add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    //  get the email address inside the email input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // get the element and value from the element
   
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    // verify email and password and check wheter valid user or not
    if(email === 'admin' && password ==='1234'){
        window.location.href = 'bank.html';
    }
    else{
        alert('Your email or password is wrong, please enter correct password');
    }
})