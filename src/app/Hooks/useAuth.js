
import { authService } from "../Services/AuthService";
import { LOCALSTORAGE } from "../utils/constants"


export default function useAuth() {

    return {
        async login(credentials) {
            try {
                const cResponse = await authService.sigin(credentials);
                if (!cResponse.ok()) {
                    return false
                }
                const data = cResponse.getSuccessData()
                //store token in local storage
                localStorage.setItem(LOCALSTORAGE.AUTH_TOKEN, data.token);
                return true
            } catch (error) {
                console.log(error)
                return false;
            }
        },
        userRole() {
            //check token and get role
        }
    }
}

