import axios from "axios";

let token;

export default class AuthService {
    constructor(store) {
        this.store = store;
        token = store.userToken;
    }
    getBaseUrl() {
        return axios.create({
            baseURL: `http://localhost:5000/api/v1`,
            withCredentials: false, // This is the default
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        });
    }

    getBootcamps() {
        return this.getBaseUrl().get("/bootcamps");
    }
    getUser() {
        return this.getBaseUrl().get("/auth/me");
    }
}