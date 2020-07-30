import axios from "axios";

const apiClient = axios.create({
    baseURL: `https://devcamper-backend.herokuapp.com/api/v1`,
    // baseURL: `http://localhost:5000/api/v1`,
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