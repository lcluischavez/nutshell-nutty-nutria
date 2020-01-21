//Case Scally: login functionality component 
import { useUsers } from "../users/userProvider.js"
//define and export the login function
export const loginFunction = () => {

//Load users from database
let appStateUsers = useUsers()

  //Define the submit button
  const submitButton = document.getElementById("submitLogin")
  //Get the the value of the username field
  const username = document.getElementById("username")
    //Get the the value of the password field
  const password = document.getElementById("password")
  //Define the app container
  const main = document.querySelector('main')

  //Function to check the username and password
  const check = (objectUserNameKey, objectPasswordKey, objectID) => {

   //Checks if the entered username and password match
   if(objectUserNameKey == username.value && password.value == objectPasswordKey)
    {
      sessionStorage.setItem('currentUsername', objectID);
      console.log('User logged in')
      console.log(objectID)
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
  //What happens when the submit login button is clicked
  submitButton.onclick = () => {
    //Get the matching username value
    let database = appStateUsers.filter(database => database.username === username.value)
    // if (database = undefined) {
    //   alert("Error: Incorrect Password or Username");
    // }    
    let key = Object.values(database)
    //Find the user object
    let foundObject = key.find(userNameKey => userNameKey.username == username.value);
    // let currentObject = Object.entries(foundObject)
    //Find the value of the username key on the object
    let objectUserNameKey = foundObject.username
    //Find the value of the password key on the object
    let objectPasswordKey = foundObject.password

    let objectID = foundObject.id
    // let foundUsername = Object.values(foundObject)

    check(objectUserNameKey, objectPasswordKey, objectID)}
  }