// import { useUsers, getusers } from loginProvider.js

// let appStateUsers = useUsers()

//let updateUsers = getusers()

// console.log(appStateUsers)

export const loginFunction = () => {

const submitButton = document.getElementById("submitLogin")
const username = document.getElementById("username")
const password = document.getElementById("password")

//Function to check the username and password

const check = (form) => {
 //Checks if the entered username and password match
 if(username.value == "username" && password.value == "password")
  {
    sessionStorage.setItem(username.value, 'testValue');
    //If the username and password matches, render the main app and store the value of the username field in session storage
  }
 else
 {
   alert("Error: Incorrect Password or Username") //Popup error message
  }
}

submitButton.onclick = () => {check()}
}