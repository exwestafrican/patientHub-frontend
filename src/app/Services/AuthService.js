import postData from "../Network/post."
import { BASE_URL } from "./BaseSetup";



export const authService = {
    async sigin(credentials) {
        const url = BASE_URL + "/auth/signin";
        const cResp = await postData(url, credentials)
        return cResp;

    }
}