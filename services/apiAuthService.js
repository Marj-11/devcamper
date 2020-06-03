import axios from "axios";

let token;

export default class AuthService {
    constructor(store) {
        this.store = store;
        token = store.userToken;
    }
    getBaseUrl() {
        return axios.create({
            baseURL: `https://devcamper-backend.herokuapp.com/api/v1`,
            withCredentials: false, // This is the default
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        });
    }

    getBootcamps() {
        console.log(token);

        return this.getBaseUrl().get("/bootcamps");
    }
    getCourses() {
        return this.getBaseUrl().get("/courses");
    }
    getUser() {
        return this.getBaseUrl().get("/auth/me");
    }
    addNewBootcamp(body) {
        return this.getBaseUrl().post("/bootcamps", body);
    }
    deleteBootcamp(id) {
        return this.getBaseUrl().delete("/bootcamps/" + id);
    }
}