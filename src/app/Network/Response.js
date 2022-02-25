export default class CustomResponse {
    constructor(statusCode, payload) {

        this.statusCode = statusCode;
        this.__payload = payload




    }
    getSuccessData() {
        if (this.ok()) {
            return this.__payload
        }
        return {}
    }

    getErrorMessage() {
        if (!this.ok()) {
            return this.__payload["message"]
        }
        return ""

    }

    ok() {
        if (this.statusCode >= 200 && this.statusCode < 300) {
            return true;
        }
        return false;
    }
}