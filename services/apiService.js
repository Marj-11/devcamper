import axios from "axios";

const env =
    process.env.NODE_ENV === "production" ?
    process.env.EXTERNAL_SERVER_URL :
    process.env.INTERNAL_SERVER_URL;
const apiClient = axios.create({
    baseURL: env,
    withCredentials: false, // This is the default
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
    }
});

export default {
    getBootcamps() {
        return apiClient.get("/bootcamps");
    },
    getBootcamp(id) {
        return apiClient.get("/bootcamps/" + id);
    },
    getUser(id) {
        return apiClient.get("/users/" + id);
    },
    getCourses() {
        return apiClient.get("/courses");
    },
    getCourse(id) {
        return apiClient.get("/courses/" + id);
    },
    registerUser(body) {
        return apiClient.post("/auth/register", body);
    },
    loginUser(body) {
        return apiClient.post("/auth/login", body);
    },
    sendREmail(email) {
        return apiClient.post("/auth/forgotpassword", email);
    },
    sendRPassword(passwordToken, password) {
        return apiClient.put(`/auth/resetpassword/${passwordToken}`, password);
    }
};