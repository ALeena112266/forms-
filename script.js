const firstName = document.getElementById("firstName")
const errorFname = document.getElementById("errorFname")

const lastName = document.getElementById("lastName")
const errorLname = document.getElementById("errorLname")

const Password = document.getElementById("password")
const errorPassword = document.getElementById("errorPassword")

const Email = document.getElementById("email")
const errorEmail = document.getElementById("errorEmail")

const confirmPassword = document.getElementById("confirmPassword")
const errorConfirmPassword = document.getElementById("errorConfirmPassword")

const DoB = document.getElementById("DoB")
const errorDoB = document.getElementById("errorDoB")

const province = document.getElementById("province")
const errorProvince = document.getElementById("errorProvince")

const gender = document.getElementsByClassName("gender")
const errorGender = document.getElementById("errorGender")

function checkLastName(){
    if(firstName.value.trim() === ""){
        errorFname.textContent = "Enter First name please!!!"
    } else {
        errorFname.textContent = ""
    }
}

function checkEmail(){
    if(lastName.value.trim() === ""){
        errorLname.textContent = "Enter Last name please!!!"
    } else {
        errorLname.textContent = ""
    }
}

function checkPassword(){
    if(Email.value.trim() === ""){
        errorEmail.textContent = "Enter Email please!!!"
    } else {
        errorEmail.textContent = ""
    }
}

function checkconfirmPassword(){
    if(Password.value.trim() === ""){
        errorPassword.textContent = "Enter Password please!!!"
    } else {
        errorPassword.textContent = ""
    }
}

function checkDoB(){

    const today = new Date()
    const dob = new Date(DoB.value)

    if(dob > today){
        DoB.value = ""
        errorDoB.textContent = "DoB can't be a future date!"
    } else {
        errorDoB.textContent = ""
    }

    if(confirmPassword.value.trim() === ""){
        errorConfirmPassword.textContent = "Confirm password please!"
    } else {
        errorConfirmPassword.textContent = ""
    }
}

function checkProvince(){
    if(DoB.value === ""){
        errorDoB.textContent = "Select Date of Birth!"
    } else {
        errorDoB.textContent = ""
    }
}

function checkGender(){
    if(province.value === ""){
        errorProvince.textContent = "Select a province!"
    } else {
        errorProvince.textContent = ""
    }
}

function checkTerms(){
    let selectedGender = false;
    for (let i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            selectedGender = true;
            break;
        }
    }

    if (!selectedGender) {
        errorGender.textContent = "Select a gender!";
    } else {
        errorGender.textContent = "";
    }
}