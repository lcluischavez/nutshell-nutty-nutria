export const loginForm = () => {

    return `<div class="loginPage">

    <h1>Nutshell Login Page</h1>

    <form name="login">
        Username: <input type="text" name="userid" id="username"/>
        Password: <input type="password" name="pswrd" id="password"/>
        <input type="button" id="submitLogin" value="Login"/>
        <input type="reset" value="Cancel"/>
    </form>

    </div>
`
}

