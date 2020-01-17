import { loginForm } from "./loginForm.js"
import { loginFunction } from "./loginFunction.js";

export const login = () => loginForm()
    .then(loginFunction())
