import postData from "../Network/post."
import { BASE_URL } from "./BaseSetup";

export const hospitalAdminService = {
    async signup(hAdminData, eirCode) {
        const url = BASE_URL + "/hospitaladmin/register?eirCode=" + eirCode;
        const cResp = await postData(url, hAdminData)
        return cResp;

    }
}


