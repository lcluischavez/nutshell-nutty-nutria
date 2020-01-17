import { getUsers, useUsers } from "./loginProvider.js"

let updateUsers = getUsers



let appStateUsers = useUsers()

updateUsers().then((console.log(appStateUsers.find(x => x.username === 'bigDaddyOG_37'))))

export const loginFunction = () => {

const submitButton = document.getElementById("submitLogin")
const username = document.getElementById("username")
const password = document.getElementById("password")

//Function to check the username and password

const check = (form) => {
 //Checks if the entered username and password match
 if(username.value == "username" && password.value == "password")
  {
    sessionStorage.setItem(username.value, 'testValue1');
    //If the username and password matches, render the main app and store the value of the username field in session storage
  }
 else
 {
   alert("Error: Incorrect Password or Username") //Popup error message
  }
}

submitButton.onclick = () => {check()}
}