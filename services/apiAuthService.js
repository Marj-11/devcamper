import axios from "axios";

let token;

export default class AuthService {
    constructor(store) {
        this.store = store;
        token = store.userToken;
    }

    getBaseUrl() {
        return axios.create({
            // baseURL: `https://devcamper-backend.herokuapp.com/api/v1`,
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
    getCourses() {
        return this.getBaseUrl().get("/courses");
    }
    getUser() {
        return this.getBaseUrl().get("/auth/me");
    }
    addNewBootcamp(body) {
        return this.getBaseUrl().post("/bootcamps", body);
    }
    updateBootcamp(body, id) {
        return this.getBaseUrl().put("/bootcamps/" + id, body);
    }
    updateUser(body, id) {
        return this.getBaseUrl().put("/users/" + id, body);
    }
    deleteBootcamp(id) {
        return this.getBaseUrl().delete("/bootcamps/" + id);
    }
    deleteUser(id) {
        return this.getBaseUrl().delete("/users/" + id);
    }

    addReview(body, id) {
        return this.getBaseUrl().post("/bootcamps/" + id + "/reviews", body);
    }
    getReviews(id) {
        return this.getBaseUrl().get("/bootcamps/" + id + "/reviews");
    }
    getUsers() {
        return this.getBaseUrl().get("/users");
    }
    getUserById(id) {
        return this.getBaseUrl().get("/users/" + id);
    }
}