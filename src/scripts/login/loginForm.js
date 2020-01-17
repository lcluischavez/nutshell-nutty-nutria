const loginTarget = document.getElementById(loginDiv);


export const loginForm = () => {

    return loginTarget.innerHTML=
                    
    `<div class="loginPage">

    <h1>Nutshell Login Page</h1>

    <form name="login">
        Username: <input type="text" name="userid" id="username"/>
        Password: <input type="password" name="pswrd" id="password"/>
        <input type="button" id="submitLogin" value="Login"/>
        <input type="reset" value="Cancel"/>
    </form>

    <form name="registration">
        First Name: <input type="text" id="firstName"/>
        Last Name: <input type="text" id="lastName"/>
        Email Address: <input type="text" id="emailAddress"/>
        Password: <input type=password" name="pswrd" id="registrationPassword"/>
        Confirm Password: <input type="password" name="pswrd" id="confirmPassword"/>
        <input type="button" id="submitLogin" id="submitRegistration" value="Register"/>
    </form>

    </div>
`}