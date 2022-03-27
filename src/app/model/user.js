import { LOCALSTORAGE } from "../utils/constants"
import { JWT } from "./jwt";

export const User = {
    role() {
        const token = localStorage.getItem(LOCALSTORAGE.AUTH_TOKEN);
        const tokenBody = JWT.body(token);
        console.log(tokenBody.role);
        return tokenBody.role
    },

    isLoggedIn() {
        const token = localStorage.getItem(LOCALSTORAGE.AUTH_TOKEN);
        if (token == null || token == "") {
            return false;
        }
        let currentDate = new Date();
        const body = JWT.body(token)
        console.log(body.exp)
        console.log(body.exp * 1000)
        if (body.exp * 1000 < currentDate.getTime()) {
            return false;
        }
        return true;
    },

    hasRole(role) {
        if (role == this.role()) {
            return true;
        }
        return false
    },
    authToken() {
        return localStorage.getItem(LOCALSTORAGE.AUTH_TOKEN)
    }
}