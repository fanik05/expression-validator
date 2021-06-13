// get UI elements 
const dropdown = document.querySelector(".dropdown");
const emailId = "email-option";
const phoneNumberId = "phone-number-option";
const postCodeId = "post-code-option";

// Event listeners
dropdown.addEventListener("click", validate); 

// functionalities
function validate(e) {
    let option = "";
    let regex = "";
    let userQuery = "Enter the";
    let input;
    let output = "";
    let result = "";

    if (e.target.id === emailId) {
        option = emailId;
        userQuery += " email:";
        input = prompt(userQuery);
        output += "Email";
    } else if (e.target.id === phoneNumberId) {
        option = phoneNumberId;
        userQuery += " phone number:";
        input = prompt(userQuery);
        output += "Phone number";
    } else if (e.target.id === postCodeId) {
        option = postCodeId;
        userQuery += " post code:";
        input = prompt(userQuery);
        output += "Post code";
    }

    switch(option) {
        case emailId:
            regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            break;
        case phoneNumberId:
            regex = /^(?:\+88|01)?\d{11}$/;
            break;
        case postCodeId:
            regex = /^\d{4}$/;
            break;
    }

    if (regex && input) {
        result = regex.test(input);

        if (result) {
            alert(output + " is valid!");
        } else {
            alert(output + " is invalid!");
        }
    }
}