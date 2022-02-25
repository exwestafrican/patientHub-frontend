import postData from "../Network/post.";

const BASE_URL = "http://localhost:8082/v1"



export async function createHospital(hospitalData) {
    const cResp = await postData(BASE_URL + "/hospital", hospitalData);
    return cResp;
}


export function getErrorMessage(response) {
    let jsonResponse = response.json()
    console.log(jsonResponse)
    let msg = jsonResponse.get("message")
    return msg

}


