var nameError = document.getElementById('name-error');

function validateName(){
    var name = document.getElementById('title').value;

    if(name.length == 0){
        nameError.innerHTML = 'Name is required'
        return false;
    }
    // if(!name.match(/^[A-Za-z]*\s{1}[A-Za-a]*$/)){
    //     nameError.innerHTML = 'Required First and Last Name';
    //     return false;
    // }
    nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}


// Email Validation
var emailError = document.getElementById('email-error');

function validateEmail(){
    var email = document.getElementById('email').value;

    if(email.length == 0){
        emailError.innerHTML = 'Email is required'
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = 'Email Invalid'
        return false;
    }
    emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

// Phone Number Validation
var phoneError = document.getElementById('phone-error');

function validatePhone(){
    var phone = document.getElementById('phone').value;

    if(phone.length == 0){
        phoneError.innerHTML = 'Phone number is required';
        return false;
    }
    if(phone.length !== 10){
        phoneError.innerHTML = 'Phone number should be 10 digits';
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = 'Only digit is required'
        return false;
    }
    phoneError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

// Address Validation
var addressError = document.getElementById('address-error')

function validateAddress(){
    var address = document.getElementById('add').value;

    if(address.length == 0){
        addressError.innerHTML = 'Address is required';
        return false;
    }
    addressError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

// Postal/Zip Code Validation
var zipcodeError = document.getElementById('zipcode-error');

function validateZipcode(){
    var zipcode = document.getElementById('zcode').value;

    if(zipcode.length == 0){
        zipcodeError.innerHTML = 'Zip Code is required'
        return false;
    }
    if(zipcode.length !== 5){
        zipcodeError.innerHTML = 'Zip Code should be 5 digits';
        return false;
    }
    if(!zipcode.match(/^[0-9]{5}$/)){
        zipcodeError.innerHTML = 'The Zip Code should be in digits only'
        return false;
    }
    zipcodeError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

