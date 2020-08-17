import axios from "axios";

let token;

export default class AuthService {
    constructor(store) {
        this.store = store;
        token = store.userToken;
    }

    getBaseUrl() {
        const env =
            process.env.NODE_ENV === "production" ?
            process.env.EXTERNAL_SERVER_URL :
            process.env.INTERNAL_SERVER_URL;
        return axios.create({
            baseURL: env,
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
    deRegisterUser(body, id) {
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