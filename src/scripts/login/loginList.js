import { loginForm } from "./loginForm.js"

const contentTarget = document.querySelector(".loginPage")


const loginList = () => {
    const loginHTML = loginForm()
  
    const render = () => {
        contentTarget.innerHTML = loginHTML
        }

    render()
}

export default loginList