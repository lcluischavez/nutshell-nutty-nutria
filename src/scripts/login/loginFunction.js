// import { useUsers, getUsers } from "../users/userProvider.js"

// let updateUsers = getUsers()
// let appStateUsers = useUsers()


// console.log(appStateUsers)

import { useUsers } from "../users/userProvider.js"


export const loginFunction = () => {
let appStateUsers = useUsers()

console.log(appStateUsers)

  const submitButton = document.getElementById("submitLogin")
  const username = document.getElementById("username")
  const password = document.getElementById("password")
  const main = document.querySelector('main')  
  //Function to check the username and password
  
  const check = (key) => {

  let foundObject = key.find(userNameKey => userNameKey.username == username.value);
  let foundValues = Object.values(foundObject)
   //Checks if the entered username and password match
   if(foundValues.find(currentValue => currentValue == username.value) == username.value && password.value == "password")
    {
      sessionStorage.setItem(username.value, 'testValue');
      console.log('User logged in')
      const show = (element) => {
        element.style.display = 'flex';
      };
      show(main)
      //If the username and password matches, render the main app and store the value of the username field in session storage
    }
   else
   {
     alert("Error: Incorrect Password or Username") //Popup error message
    }
  }
  
  submitButton.onclick = () => {
    let database = appStateUsers.filter(database => database.username === username.value)
    // if (database = undefined) {
    //   alert("Error: Incorrect Password or Username");
    // }    
    let key = Object.values(database)
    
    check(key)}
  }